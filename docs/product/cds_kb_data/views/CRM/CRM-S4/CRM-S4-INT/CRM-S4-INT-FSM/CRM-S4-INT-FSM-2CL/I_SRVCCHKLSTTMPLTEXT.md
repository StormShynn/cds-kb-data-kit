---
name: I_SRVCCHKLSTTMPLTEXT
description: "Checklist Template - Text"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value
semantic_en: "Checklist Template - Text"
semantic_vi: "Checklist Template - Text — CDS view cơ bản (master data) dựa trên crmd_fsm_tm_hdrt."
keywords:
  - "checklist"
  - "template"
  - "text"
  - "service"
  - "srvc"
  - "chklst"
  - "language"
  - "tmpl"
  - "name"
  - "description"
  - "category"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SRVCCHKLSTTMPLTEXT

**Checklist Template - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` | ✓ | |  | `template_id` | `CHAR(10)` | Template ID |
| `SrvcChklstLanguage` | ✓ | |  | `spras` | `LANG(1)` | Language |
| `SrvcChklstTmplName` |  | |  | `name` | `CHAR(128)` | Template Name |
| `SrvcChklstTmplDescription` |  | |  | `description` | `CHAR(150)` | FSM Template Description |
| `SrvcChklstTmplCategoryName` |  | |  | `category_name` | `CHAR(1333)` | FSM Category Name |
| `SrvcChklstTmplTagsString` |  | |  | `tags` | `CHAR(1333)` | Template Tags |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value)*

```abap
@EndUserText.label: 'Checklist Template - Text'
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
define view entity I_SrvcChklstTmplText
  as select from crmd_fsm_tm_hdrt
{
  key template_id   as ServiceChecklistTemplate,
      @Semantics.language:true
  key spras         as SrvcChklstLanguage,
      name          as SrvcChklstTmplName,
      @Semantics.text:true
      description   as SrvcChklstTmplDescription,
      category_name as SrvcChklstTmplCategoryName,
      tags          as SrvcChklstTmplTagsString
}
```
