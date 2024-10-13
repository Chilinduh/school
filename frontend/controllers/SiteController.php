<?php

namespace frontend\controllers;

use frontend\models\ResendVerificationEmailForm;
use frontend\models\VerifyEmailForm;
use Yii;
use yii\base\InvalidArgumentException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;
use yii\web\Response;

/**
 * Site controller
 */
class SiteController extends Controller
{

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => \yii\web\ErrorAction::class,
            ],
            'captcha' => [
                'class' => \yii\captcha\CaptchaAction::class,
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }


    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionCallBack()
    {

        $params = Yii::$app->request->post();

        Yii::$app->mailer->compose(['html' => 'layouts/mail'],
            [
                'content' => $params['text']??'Ничего не указали'
            ])
            ->setFrom(['edu@digitside.ru' => 'DigitSide.ru'])
            ->setTo('edu@digitside.ru')
            ->setSubject('Перезвонить по Курсам')
            ->send();

        $response = new Response();
        $response->statusCode = 200;
        $response->data = json_encode(
            [
                'message' => 'Спасибо за проявленный интерес. Наши менеджеры свяжутся с Вами!',
                'code' => 0,
                'status' => 200,
                'type' => 'yii\\web\\BadRequestHttpException'
            ]);

        return $response;
    }


    public function actionSend()
    {

        $params = Yii::$app->request->post();

        Yii::$app->mailer->compose(['html' => 'layouts/mail'],
            [
                'content' => 'Тел.: '.$params['your-phone'].'<br> Тема: '.$params['subject'].'<br> Сообщение: '.$params['message']
            ])
            ->setFrom(['edu@digitside.ru' => 'DigitSide.ru'])
            ->setTo('edu@digitside.ru')
            ->setSubject('Вопрос по Курсам')
            ->send();

        $response = new Response();
        $response->statusCode = 200;
        $response->data = json_encode(
            [
                'message' => 'Спасибо за проявленный интерес. Наши менеджеры свяжутся с Вами!',
                'code' => 0,
                'status' => 200,
                'type' => 'yii\\web\\BadRequestHttpException'
            ]);

        return $response;
    }



    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {

        return $this->render('index');
    }


    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } else {
                Yii::$app->session->setFlash('error', 'There was an error sending your message.');
            }

            return $this->refresh();
        }

        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }
}
