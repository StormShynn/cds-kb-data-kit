---
name: I_SRVCCHECKLISTTEMPLATEENHCD
description: "Checklist Template Enhanced"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value
semantic_en: "Checklist Template Enhanced"
semantic_vi: "Checklist Template Enhanced — CDS view tổng hợp dựa trên I_ServiceChecklistTemplate."
keywords:
  - "checklist"
  - "template"
  - "enhanced"
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
# I_SRVCCHECKLISTTEMPLATEENHCD

**Checklist Template Enhanced**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` | ✓ | |  |  | `CHAR(10)` | Template ID |
| `SrvcChklstTmplStatus` |  | |  |  | `CHAR(1)` | Template Status |
| `SrvcChklstTmplCategory` |  | |  |  | `CHAR(10)` | Checklist Template Category ID |
| `SrvcChklstCreationDateTime` |  | |  |  | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` |  | |  |  | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `FSMChecklistTemplateUUID` |  | |  |  | `RAW(16)` | FSM Template ID |
| `FSMChecklistCategoryUUID` |  | |  |  | `RAW(16)` | FSM Category ID |
| `SrvcChklstTmplVersion` |  | |  |  | `INT1(3)` | Version |
| `SrvcChklstLanguage` |  | |  |  | `LANG(1)` | Language |
| `_TemplateElement` | | ✓ | | | | |
| `_SubElements` | | ✓ | | | | |
| `_Instances` | | ✓ | | | | |
| `_SrvcChklstTmplText` | | ✓ | | | | |
| `_SrvcChklstTmplStatus` | | ✓ | | | | |
| `_SrvcChklstTmplCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TemplateElement` | `I_SrvcChklstTmplElement` | [1..*] |
| `_SubElements` | `I_SrvcChklstTmplSubElement` | [1..*] |
| `_Instances` | `I_SrvcChecklistInstanceEnhcd` | [1..*] |
| `_SrvcChklstTmplText` | `I_SrvcChklstTmplText` | [0..*] |
| `_SrvcChklstTmplExtn` | `E_ServiceChecklistTemplate` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Checklist Template Enhanced'
@VDM: {
  viewType: #COMPOSITE,
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

define view entity I_SrvcChecklistTemplateEnhcd
  as select from I_ServiceChecklistTemplate
  association [1..*] to I_SrvcChklstTmplElement      as _TemplateElement    on  $projection.ServiceChecklistTemplate = _TemplateElement.ServiceChecklistTemplate
  
  association [1..*] to I_SrvcChklstTmplSubElement   as _SubElements        on  $projection.ServiceChecklistTemplate     = _SubElements.ServiceChecklistTemplate
                                                                            and _SubElements.SrvcChklstTmplParentElement = '0000'
  association [1..*] to I_SrvcChecklistInstanceEnhcd as _Instances          on  $projection.ServiceChecklistTemplate = _Instances.ServiceChecklistTemplate

  association [0..*] to I_SrvcChklstTmplText         as _SrvcChklstTmplText on  $projection.ServiceChecklistTemplate = _SrvcChklstTmplText.ServiceChecklistTemplate
  association [0..1] to E_ServiceChecklistTemplate   as _SrvcChklstTmplExtn on  $projection.ServiceChecklistTemplate = _SrvcChklstTmplExtn.ServiceChecklistTemplate

{

  key ServiceChecklistTemplate,
      SrvcChklstTmplStatus,
      SrvcChklstTmplCategory,
      SrvcChklstCreationDateTime,
      SrvcChklstCreatedByUser,
      SrvcChklstChangedDateTime,
      SrvcChklstChangedByUser,
      FSMChecklistTemplateUUID,
      FSMChecklistCategoryUUID,
      SrvcChklstTmplVersion,
      SrvcChklstLanguage,

      //  Associations
      _TemplateElement,
      _SubElements,
      _Instances,
      _SrvcChklstTmplStatus,
      _SrvcChklstTmplText,
      _SrvcChklstTmplCategory
      

}
```
