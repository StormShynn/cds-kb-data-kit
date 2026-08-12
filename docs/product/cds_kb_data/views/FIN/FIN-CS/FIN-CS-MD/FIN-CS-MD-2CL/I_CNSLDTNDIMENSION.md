---
name: I_CNSLDTNDIMENSION
description: "Consolidation Dimension"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSION')/$value
semantic_en: "Consolidation Dimension"
semantic_vi: "Consolidation Dimension — CDS view giao diện dựa trên tf150."
keywords:
  - "consolidation"
  - "dimension"
  - "fiscal"
  - "year"
  - "variant"
  - "cnsldtn"
  - "unit"
  - "nmbr"
  - "characters"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNDIMENSION

**Consolidation Dimension**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | | `_Source` | `dimen` | `CHAR(2)` | Dimension |
| `FiscalYearVariant` |  | |  | `case when _Source.periv = '' then 'K4' else _Source.periv end` | `CHAR(2)` | Fiscal Year Variant |
| `CnsldtnUnitMaxNmbrOfCharacters` |  | | `_Source` | `bulgh` | `NUMC(2)` | Length of the consolidation unit |
| `CnsldtnGrpMaxNmbrOfCharacters` |  | | `_Source` | `cglgh` | `NUMC(2)` | Length of consolidation group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnDimensionT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNDIMENSION')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCDIMENSION',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering.status: #NOT_ALLOWED
  }
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationDimension',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION]
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Dimension'

define view I_CnsldtnDimension
  as select from tf150 as _Source

  association [0..*] to I_CnsldtnDimensionT as _Text on $projection.ConsolidationDimension = _Text.ConsolidationDimension
{
      @ObjectModel.text.association: '_Text'
  key _Source.dimen  as ConsolidationDimension,

      case when _Source.periv = '' then 'K4'
           else _Source.periv
      end            as FiscalYearVariant,

      _Source.bulgh  as CnsldtnUnitMaxNmbrOfCharacters,
      _Source.cglgh  as CnsldtnGrpMaxNmbrOfCharacters,


      /* Associations */
      _Text
}
```
