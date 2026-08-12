---
name: I_CNSLDTNPRFTCTRTMPRLNDEHIERVH
description: "Consolidation Profit Center Hierarchy"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRTMPRLNDEHIERVH')/$value
semantic_en: "Consolidation Profit Center Hierarchy"
semantic_vi: "Consolidation Profit Center Hierarchy — CDS view tổng hợp (master data) dựa trên I_CnsldtnPrftCtrTmprlNodeHier."
keywords:
  - "consolidation"
  - "profit"
  - "center"
  - "hierarchy"
  - "prft"
  - "controlling"
  - "area"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNPRFTCTRTMPRLNDEHIERVH

**Consolidation Profit Center Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRTMPRLNDEHIERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPrftCtrHierarchy` | ✓ | | `_CnsldtnPrftCtrTmprlNodeHier` | `ConsolidationPrftCtrHierarchy` | `CHAR(40)` | Consolidation Profit Center Hierarchy |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRTMPRLNDEHIERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRTMPRLNDEHIERVH')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL},
  representativeKey: 'ConsolidationPrftCtrHierarchy',
  dataCategory:#VALUE_HELP,
 modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
  }
@Analytics: {
    technicalName: 'ICSPCTNHVH'
    }
@VDM:{
  viewType: #COMPOSITE
  }
@EndUserText.label: 'Consolidation Profit Center Hierarchy'

define view entity I_CnsldtnPrftCtrTmprlNdeHierVH
  as select from I_CnsldtnPrftCtrTmprlNodeHier as _CnsldtnPrftCtrTmprlNodeHier


{
        @ObjectModel.text.element: ['CnsldtnProfitCenterHierText']
  key   _CnsldtnPrftCtrTmprlNodeHier.ConsolidationPrftCtrHierarchy,


        ControllingArea,

        @Semantics.text
        _CnsldtnPrftCtrTmprlNodeHier._Text[1: Language=$session.system_language].CnsldtnProfitCenterHierText


}
```
