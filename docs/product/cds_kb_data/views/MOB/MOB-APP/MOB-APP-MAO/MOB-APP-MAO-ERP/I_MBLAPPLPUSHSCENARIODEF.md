---
name: I_MBLAPPLPUSHSCENARIODEF
description: "Mobile Application Push Scenario"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value
semantic_en: "Mobile Application Push Scenario"
semantic_vi: "Mobile Application Push Scenario — CDS view giao diện dựa trên Mobile Application Push Scenario."
keywords:
  - "mobile"
  - "application"
  - "push"
  - "scenario"
  - "appl"
  - "internal"
  - "user"
  - "source"
  - "type"
  - "scen"
  - "handler"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MBLAPPLPUSHSCENARIODEF

**Mobile Application Push Scenario**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MblApplPushScenarioInternal` | ✓ | |  | `scenario_id` | `CHAR(40)` | Scenario Id |
| `MobileUserApplication` |  | |  | `mobile_app` | `CHAR(30)` | Mobile Application Name |
| `MblUsrApplPushSourceType` |  | |  | `source_type` | `CHAR(10)` | Push Scenario Source Type |
| `MobileUserApplPushSourceObj` |  | |  | `source_object` | `CHAR(100)` | Push source object |
| `MblApplPushScenSourceHandler` |  | |  | `source_handler` | `CHAR(30)` | Push handler |
| `MblApplPushScenSubscriberType` |  | |  | `subscriber_type` | `CHAR(10)` | Subscriber Type |
| `MblApplPushDistributorType` |  | |  | `distributor_type` | `CHAR(10)` | Push service data distributor type |
| `MblApplPushDistributorObj` |  | |  | `distributor_obj` | `CHAR(100)` | Push service data distributor object |
| `MblApplPushDistributionHandler` |  | |  | `distrib_handler` | `CHAR(30)` | Push handler |
| `MblUsrApplPushEmlNotifIsEnbld` |  | |  | `send_email` | `CHAR(1)` | Active Flag |
| `MblApplPushEmailNotifDesc` |  | |  | `subject` | `CHAR(50)` | Short description of contents |
| `MblApplPushEmailMessageText` |  | |  | `message` | `CHAR(140)` | SMS Message |
| `MblApplPushDataPackIsSkipped` |  | |  | `skip_datapack` | `CHAR(1)` | Active Flag |
| `MblApplPushScenIsActive` |  | |  | `active` | `CHAR(1)` | Active Flag |
| `MblApplPushNotifValidityInHrs` |  | |  | `push_validity` | `INT4(10)` | Validity period (hours) |
| `MblApplPushEvtTrggrIsDsbld` |  | |  | `disable_event` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushEventInternal` |  | |  | `event_id` | `CHAR(32)` | Background Processing Event |
| `MobileUserApplPushEvtParam` |  | |  | `event_param` | `CHAR(64)` | Batch Event Parameters (for example, Jobname/Jobcount) |
| `MobileApplicationPushEventRule` |  | |  | `event_rule` | `CHAR(30)` | Rule determines event id and parameter for push scenario |
| `MblApplQueuedRFCIsEnabled` |  | |  | `enable_qrfc` | `CHAR(1)` | Active Flag |
| `MblApplPushQueuedRFCName` |  | |  | `qrfc_queue` | `CHAR(24)` | Name of tRFC Queue |
| `MblApplPushQueuedRFCRule` |  | |  | `qrfc_rule` | `CHAR(30)` | Rule determines qRFC queue name |
| `MobileUserApplPushScenarioPrio` |  | |  | `priority` | `NUMC(1)` | Push scenario priority |
| `MblApplPushMergeIsAllowed` |  | |  | `flag_allow_merge` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushServerCmpltdIsExcld` |  | |  | `flag_no_srv_comp` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushMaxSelDelayInSecs` |  | |  | `max_select_delay` | `INT4(10)` | Maximum selection delay (seconds) |
| `MblApplPushNmbrOfSelRetry` |  | |  | `num_select_retry` | `INT4(10)` | Number of selection retry |
| `MobileUserApplPushHistIsEnbld` |  | |  | `enable_history` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrApplPushOutbTrggrIsEnbld` |  | |  | `enable_otrig` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplSglInstceProcgIsUsed` |  | |  | `single_inst_proc` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushRetryIntvlInSeconds` |  | |  | `refetch_interval` | `INT4(10)` | Refetch wait interval (Sec) |
| `MblApplPushMetadataIsRequired` |  | |  | `gen_meta_info` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplSelfPushIsDisabled` |  | |  | `no_self_push` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushScenarioAlias` |  | |  | `scenario_alias` | `CHAR(40)` | Push scenario id alias |
| `MblUsrApplFetchCallbackIsAllwd` |  | |  | `fetch_callback` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushTransHistIsChkd` |  | |  | `check_mtran_hist` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplTransHistIntvlInSecs` |  | |  | `mtran_his_intval` | `INT4(10)` | Mobile transaction update history check interval (seconds) |
| `MblApplPushSubscriptionIsAllwd` |  | |  | `allow_subreq` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblApplPushSubscrpnAgtInt` |  | |  | `subagent_id` | `CHAR(40)` | Subscription Agent ID |
| `MobileUserApplPushCreatedBy` |  | |  | `created_by` | `CHAR(12)` | Created by |
| `MblUsrApplPushCreatedDteTme` |  | |  | `created_ts` | `DEC(15)` | Creation timestamp |
| `MobileUserApplPushChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `MblUsrApplPushChangedDteTme` |  | |  | `changed_ts` | `DEC(15)` | Changed time stamp |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLAPPLPUSHSCENARIODEF')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@EndUserText.label: 'Mobile Application Push Scenario'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'MblApplPushScenarioInternal',
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}

@VDM.viewType: #BASIC

define view entity I_MblApplPushScenarioDef 
as select from /syclo/psh00 as PushScenario
   left outer to one join /syclo/ypsh00 on  /syclo/ypsh00.scenario_id     = PushScenario.scenario_id
{
    key PushScenario.scenario_id         as MblApplPushScenarioInternal,
        PushScenario.mobile_app          as MobileUserApplication,
        PushScenario.source_type         as MblUsrApplPushSourceType,
        PushScenario.source_object       as MobileUserApplPushSourceObj,
        PushScenario.source_handler      as MblApplPushScenSourceHandler,
        PushScenario.subscriber_type     as MblApplPushScenSubscriberType,
        PushScenario.distributor_type    as MblApplPushDistributorType,
        PushScenario.distributor_obj     as MblApplPushDistributorObj,
        PushScenario.distrib_handler     as MblApplPushDistributionHandler,
        PushScenario.send_email          as MblUsrApplPushEmlNotifIsEnbld,
        PushScenario.subject             as MblApplPushEmailNotifDesc,
        PushScenario.message             as MblApplPushEmailMessageText,
        PushScenario.skip_datapack       as MblApplPushDataPackIsSkipped,
        PushScenario.active              as MblApplPushScenIsActive,
        PushScenario.push_validity       as MblApplPushNotifValidityInHrs,
        PushScenario.disable_event       as MblApplPushEvtTrggrIsDsbld,
        PushScenario.event_id            as MblUsrApplPushEventInternal,
        PushScenario.event_param         as MobileUserApplPushEvtParam,
        PushScenario.event_rule          as MobileApplicationPushEventRule,
        PushScenario.enable_qrfc         as MblApplQueuedRFCIsEnabled,
        PushScenario.qrfc_queue          as MblApplPushQueuedRFCName,
        PushScenario.qrfc_rule           as MblApplPushQueuedRFCRule,
        PushScenario.priority            as MobileUserApplPushScenarioPrio,
        PushScenario.flag_allow_merge    as MblApplPushMergeIsAllowed,
        PushScenario.flag_no_srv_comp    as MblApplPushServerCmpltdIsExcld,
        PushScenario.max_select_delay    as MblApplPushMaxSelDelayInSecs,
        PushScenario.num_select_retry    as MblApplPushNmbrOfSelRetry,
        PushScenario.enable_history      as MobileUserApplPushHistIsEnbld,
        PushScenario.enable_otrig        as MblUsrApplPushOutbTrggrIsEnbld,
        PushScenario.single_inst_proc    as MblApplSglInstceProcgIsUsed,
        PushScenario.refetch_interval    as MblApplPushRetryIntvlInSeconds,
        PushScenario.gen_meta_info       as MblApplPushMetadataIsRequired,
        PushScenario.no_self_push        as MblApplSelfPushIsDisabled,
        PushScenario.scenario_alias      as MblApplPushScenarioAlias,
        PushScenario.fetch_callback      as MblUsrApplFetchCallbackIsAllwd,
        PushScenario.check_mtran_hist    as MblApplPushTransHistIsChkd,
        PushScenario.mtran_his_intval    as MblApplTransHistIntvlInSecs,
        PushScenario.allow_subreq        as MblApplPushSubscriptionIsAllwd,
        PushScenario.subagent_id         as MblApplPushSubscrpnAgtInt,
        PushScenario.created_by          as MobileUserApplPushCreatedBy,
        PushScenario.created_ts          as MblUsrApplPushCreatedDteTme,
        PushScenario.changed_by          as MobileUserApplPushChangedBy,
        PushScenario.changed_ts          as MblUsrApplPushChangedDteTme
}
where
  /syclo/ypsh00.scenario_id is null
union all

select from /syclo/ypsh00
{
    key scenario_id         as MblApplPushScenarioInternal,
        mobile_app          as MobileUserApplication,
        source_type         as MblUsrApplPushSourceType,
        source_object       as MobileUserApplPushSourceObj,
        source_handler      as MblApplPushScenSourceHandler,
        subscriber_type     as MblApplPushScenSubscriberType,
        distributor_type    as MblApplPushDistributorType,
        distributor_obj     as MblApplPushDistributorObj,
        distrib_handler     as MblApplPushDistributionHandler,
        send_email          as MblUsrApplPushEmlNotifIsEnbld,
        subject             as MblApplPushEmailNotifDesc,
        message             as MblApplPushEmailMessageText,
        skip_datapack       as MblApplPushDataPackIsSkipped,
        active              as MblApplPushScenIsActive,
        push_validity       as MblApplPushNotifValidityInHrs,
        disable_event       as MblApplPushEvtTrggrIsDsbld,
        event_id            as MblUsrApplPushEventInternal,
        event_param         as MobileUserApplPushEvtParam,
        event_rule          as MobileApplicationPushEventRule,
        enable_qrfc         as MblApplQueuedRFCIsEnabled,
        qrfc_queue          as MblApplPushQueuedRFCName,
        qrfc_rule           as MblApplPushQueuedRFCRule,
        priority            as MobileUserApplPushScenarioPrio,
        flag_allow_merge    as MblApplPushMergeIsAllowed,
        flag_no_srv_comp    as MblApplPushServerCmpltdIsExcld,
        max_select_delay    as MblApplPushMaxSelDelayInSecs,
        num_select_retry    as MblApplPushNmbrOfSelRetry,
        enable_history      as MobileUserApplPushHistIsEnbld,
        enable_otrig        as MblUsrApplPushOutbTrggrIsEnbld,
        single_inst_proc    as MblApplSglInstceProcgIsUsed,
        refetch_interval    as MblApplPushRetryIntvlInSeconds,
        gen_meta_info       as MblApplPushMetadataIsRequired,
        no_self_push        as MblApplSelfPushIsDisabled,
        scenario_alias      as MblApplPushScenarioAlias,
        fetch_callback      as MblUsrApplFetchCallbackIsAllwd,
        check_mtran_hist    as MblApplPushTransHistIsChkd,
        mtran_his_intval    as MblApplTransHistIntvlInSecs,
        allow_subreq        as MblApplPushSubscriptionIsAllwd,
        subagent_id         as MblApplPushSubscrpnAgtInt,
        created_by          as MobileUserApplPushCreatedBy,
        created_ts          as MblUsrApplPushCreatedDteTme,
        changed_by          as MobileUserApplPushChangedBy,
        changed_ts          as MblUsrApplPushChangedDteTme
}
where
  deleted = ''
```
