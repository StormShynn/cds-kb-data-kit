---
name: I_CNSLDTNBUDGETVERSIONDRVTN
description: "Drvtn of Consolidation Budget Version"
app_component: FIN-CS-BV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNBUDGETVERSIONDRVTN')/$value
semantic_en: "Drvtn of Consolidation Budget Version"
semantic_vi: "I_CNSLDTNBUDGETVERSIONDRVTN — CDS view tổng hợp dựa trên I_CNSLDTNBUDGETVERSIONDRVTN."
keywords:
  - "cnsldtnbudgetversiondrvtn"
  - "consolidation"
  - "comparison"
  - "version"
tags:
  - FIN
  - bo:salesorder
  - budget
  - component:FIN-CS-BV-2CL
  - FIN-CS
  - FIN-CS-BV
  - FIN-CS-BV-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNBUDGETVERSIONDRVTN

**Drvtn of Consolidation Budget Version**

| Property | Value |
|---|---|
| App Component | `FIN-CS-BV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNBUDGETVERSIONDRVTN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationComparisonVersion` | ✓ | |  |  | `CHAR(3)` | Comparison Version |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNBUDGETVERSIONDRVTN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNBUDGETVERSIONDRVTN')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Analytics.technicalName: 'ICSBUDGETVERSIONDRVTN' 
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S
  },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE ],
  representativeKey: 'ConsolidationComparisonVersion'
}
@VDM: {
  viewType: #COMPOSITE
}
@EndUserText: {
  label: 'Drvtn of Consolidation Budget Version'
}

define view entity I_CnsldtnBudgetVersionDrvtn
  as select distinct from P_CnsldtnComprnVersionDrvtn ( P_Category : 'BDG' )
{
  key ConsolidationComparisonVersion
}
```
