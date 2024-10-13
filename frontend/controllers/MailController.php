<?php

namespace frontend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

class MailController extends Controller
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

        Yii::$app->mailer->compose(['html' => 'layouts/mail'],
            [
                'content' => 'sdfdsf'
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

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {

        Yii::$app->mailer->compose(['html' => 'layouts/mail'],
            [
                'content' => 'sdfdsf'
            ])
            ->setFrom(['edu@digitside.ru' => 'DigitSide.ru'])
            ->setTo('edu@digitside.ru')
            ->setSubject('Запрос по Курсам')
            ->send();

        die;
        return $this->render('index');
    }

}
