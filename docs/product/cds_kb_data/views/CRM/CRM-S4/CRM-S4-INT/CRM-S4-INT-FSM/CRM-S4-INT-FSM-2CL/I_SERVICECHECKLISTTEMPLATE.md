---
name: I_SERVICECHECKLISTTEMPLATE
description: "Checklist Template"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value
semantic_en: "Checklist Template"
semantic_vi: "Checklist Template — CDS view cơ bản dựa trên crmd_fsm_tm_hdr."
keywords:
  - "Checklist Template"
  - "checklist"
  - "template"
  - "service"
  - "srvc"
  - "chklst"
  - "tmpl"
  - "status"
  - "category"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SERVICECHECKLISTTEMPLATE

**Checklist Template**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` | ✓ | |  | `template_id` | `CHAR(10)` | Template ID |
| `SrvcChklstTmplStatus` |  | |  | `status` | `CHAR(1)` | Template Status |
| `SrvcChklstTmplCategory` |  | |  | `category_id` | `CHAR(10)` | Checklist Template Category ID |
| `SrvcChklstCreationDateTime` |  | |  | `created_at` | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` |  | |  | `last_changed_at` | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Last Changed By |
| `FSMChecklistTemplateUUID` |  | |  | `fsm_templateuuid` | `RAW(16)` | FSM Template ID |
| `FSMChecklistCategoryUUID` |  | |  | `fsm_categoryuuid` | `RAW(16)` | FSM Category ID |
| `FSMAccount` |  | |  | `fsm_account` | `CHAR(10)` | FSM Account ID |
| `FSMCompany` |  | |  | `fsm_company` | `CHAR(10)` | FSM Company ID |
| `FSMChecklistTemplateGroupUUID` |  | |  | `fsm_template_grp_uuid` | `RAW(16)` | FSM Checklist Template Group UUID |
| `FSMChecklistRequest` |  | |  | `requestuuid` | `CHAR(40)` | Request ID |
| `SrvcChklstTmplVersion` |  | |  | `version` | `INT1(3)` | Version |
| `SrvcChklstLanguage` |  | |  | `source_language` | `LANG(1)` | Language |
| `_SrvcChklstTmplText` | | ✓ | | | | |
| `_SrvcChklstTmplStatus` | | ✓ | | | | |
| `_SrvcChklstTmplCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcChklstTmplText` | `I_SrvcChklstTmplText` | [0..*] |
| `_SrvcChklstTmplStatus` | `I_SrvcChklstTmplStatus` | [0..1] |
| `_SrvcChklstTmplExtn` | `E_ServiceChecklistTemplate` | [0..1] |
| `_SrvcChklstTmplCategory` | `I_SrvcChklstTmplCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value)*

```abap
@EndUserText.label: 'Checklist Template'

@AccessControl.authorizationCheck: #CHECK

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #B,
        sizeCategory: #L,
        dataClass: #MASTER
    }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceChecklistTemplate
  as select from crmd_fsm_tm_hdr
  association [0..*] to I_SrvcChklstTmplText       as _SrvcChklstTmplText     on $projection.ServiceChecklistTemplate = _SrvcChklstTmplText.ServiceChecklistTemplate
  association [0..1] to I_SrvcChklstTmplStatus     as _SrvcChklstTmplStatus   on $projection.SrvcChklstTmplStatus = _SrvcChklstTmplStatus.SrvcChklstTmplStatus
  association [0..1] to E_ServiceChecklistTemplate as _SrvcChklstTmplExtn     on $projection.ServiceChecklistTemplate = _SrvcChklstTmplExtn.ServiceChecklistTemplate
  association [0..1] to I_SrvcChklstTmplCategory   as _SrvcChklstTmplCategory on $projection.SrvcChklstTmplCategory = _SrvcChklstTmplCategory.SrvcChklstTmplCategory
{
  key template_id           as ServiceChecklistTemplate,
      @ObjectModel.foreignKey.association: '_SrvcChklstTmplStatus'
      status                as SrvcChklstTmplStatus,
      @ObjectModel.foreignKey.association: '_SrvcChklstTmplCategory'
      category_id           as SrvcChklstTmplCategory,
      created_at            as SrvcChklstCreationDateTime,
      created_by            as SrvcChklstCreatedByUser,
      last_changed_at       as SrvcChklstChangedDateTime,
      last_changed_by       as SrvcChklstChangedByUser,
      fsm_templateuuid      as FSMChecklistTemplateUUID,
      fsm_categoryuuid      as FSMChecklistCategoryUUID,
      fsm_account           as FSMAccount,
      fsm_company           as FSMCompany,
      fsm_template_grp_uuid as FSMChecklistTemplateGroupUUID,
      requestuuid           as FSMChecklistRequest,
      version               as SrvcChklstTmplVersion,
      source_language       as SrvcChklstLanguage,

      //Associations
      _SrvcChklstTmplText,
      _SrvcChklstTmplStatus,
      _SrvcChklstTmplCategory
}
```
