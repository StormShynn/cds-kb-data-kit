---
name: I_SRVCCHKLSTTMPLELMNTTEXT
description: "Checklist Template Elements - Text"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELMNTTEXT')/$value
semantic_en: "Checklist Template Elements - Text"
semantic_vi: "Checklist Template Elements - Text — CDS view cơ bản (master data) dựa trên crmd_fsm_tm_elmt."
keywords:
  - "checklist"
  - "template"
  - "elements"
  - "text"
  - "service"
  - "srvc"
  - "element"
  - "chklst"
  - "language"
  - "tmpl"
  - "elmnt"
  - "name"
  - "value"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SRVCCHKLSTTMPLELMNTTEXT

**Checklist Template Elements - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELMNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` | ✓ | |  | `template_id` | `CHAR(10)` | Template ID |
| `SrvcChecklistTemplateElement` | ✓ | |  | `element_id` | `NUMC(4)` | Element ID |
| `SrvcChklstLanguage` | ✓ | |  | `spras` | `LANG(1)` | Language |
| `SrvcChklstTmplElmntName` |  | |  | `name` | `CHAR(1333)` | Element Name |
| `SrvcChklstTmplElmntValueText` |  | |  | `value` | `CHAR(1333)` | Element Value |
| `SrvcChklstTmplElmntTitle` |  | |  | `title` | `CHAR(1333)` | Element Title |
| `SrvcChklstTmplElmntDescription` |  | |  | `description` | `CHAR(1333)` | Element Description |
| `SrvcChklstTmplElmntDisplayName` |  | |  | `displayname` | `CHAR(1333)` | Element Display Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELMNTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLELMNTTEXT')/$value)*

```abap
@EndUserText.label: 'Checklist Template Elements - Text'
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
    },
    dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcChklstTmplElmntText
  as select from crmd_fsm_tm_elmt
{
  key template_id as ServiceChecklistTemplate,
  key element_id  as SrvcChecklistTemplateElement,
      @Semantics.language:true
  key spras       as SrvcChklstLanguage,
      name        as SrvcChklstTmplElmntName,
      value       as SrvcChklstTmplElmntValueText,
      title       as SrvcChklstTmplElmntTitle,
      @Semantics.text:true
      description as SrvcChklstTmplElmntDescription,
      displayname as SrvcChklstTmplElmntDisplayName
}
```
