---
name: I_CNDNCONTRPROCVARSTDVH
description: "This CDS view exposes the values for the Condition Contract Process Variants."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSTDVH')/$value
semantic_en: "This CDS view exposes the values for the Condition Contract Process Variants."
semantic_vi: "Condition Contract Process Variant — CDS view tổng hợp dựa trên I_CndnContrProcVar."
keywords:
  - "condition"
  - "contract"
  - "process"
  - "variant"
  - "cndn"
  - "contr"
  - "proc"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPROCVARSTDVH

**This CDS view exposes the values for the Condition Contract Process Variants.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  |  | `CHAR(4)` | Condition Contract Process Variant |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSTDVH')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'CndnContrProcVar',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER,#SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Analytics.technicalName: 'IWCBPROCVAR_SVH'
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Condition Contract Process Variant'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_CndnContrProcVarStdVH
  as select from I_CndnContrProcVar
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI: {
         textArrangement: #TEXT_FIRST
      }
  key CndnContrProcVar,

      _Text
}
```
