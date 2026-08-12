---
name: I_CNSLDTNPROFITCENTERFORELIMT
description: "Cnsldtn Profit Center for Elim - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERFORELIMT')/$value
semantic_en: "Cnsldtn Profit Center for Elim - Text"
semantic_vi: "Cnsldtn Profit Center for Elim - Text — CDS view giao diện (master data) dựa trên P_CnsldtnPrftCtrForElimT."
keywords:
  - "cnsldtn"
  - "profit"
  - "center"
  - "for"
  - "elim"
  - "text"
  - "controlling"
  - "area"
  - "language"
  - "additional"
  - "master"
  - "data"
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
# I_CNSLDTNPROFITCENTERFORELIMT

**Cnsldtn Profit Center for Elim - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERFORELIMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( ControllingArea as nodecls )` | `CHAR(12)` | Node class |
| `ProfitCenter` | ✓ | |  |  | `CHAR(25)` | Consolidation Profit Center for Elimination |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `AdditionalMasterDataText` |  | |  | `ProfitCenterName` | `CHAR(50)` | Profit Center Description |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERFORELIMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERFORELIMT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPCFORELIMT',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'ProfitCenter',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Profit Center for Elim - Text'

define view I_CnsldtnProfitCenterForElimT
  as select from P_CnsldtnPrftCtrForElimT

  association [1..1] to I_CnsldtnControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @EndUserText.label: 'Controlling Area'
  key cast( ControllingArea as nodecls ) as ControllingArea, //cast to avoid incompatible change

  key ProfitCenter,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key Language,

      @Semantics.text
      ProfitCenterName                   as AdditionalMasterDataText,

      _ControllingArea,

      _Language
}
```
