---
name: I_PRJBILLGTRANSFCOSTQTYCODETXT
description: "Prjbillgtransfcostqtycodetxt"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBILLGTRANSFCOSTQTYCODETXT

**Prjbillgtransfcostqtycodetxt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjBillgTransfCostQtyCode` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbe_transfer_qty_costs preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PrjBillgTransfCostQtyCodeTxt` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjBillgTransfCostQtyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPRJBRILTRANSFCOSTQTYCODETXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transfer Quantity and Costs - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgTransfCostQtyCodeText'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjBillgTransfCostQtyCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PrjBillgTransfCostQtyCodeTxt as select from dd07t
  association        to parent I_ProjBillgTransfCostQtyCode   as _ProjBillgTransfCostQtyCode   on $projection.ProjBillgTransfCostQtyCode   = _ProjBillgTransfCostQtyCode.ProjBillgTransfCostQtyCode
  association [0..1] to I_Language                            as _Language                     on $projection.Language                     = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      key cast( dd07t.ddlanguage as spras preserving type )                as Language,

      @ObjectModel.foreignKey.association: '_ProjBillgTransfCostQtyCode'
      @ObjectModel.text.element: ['PrjBillgTransfCostQtyCodeTxt']
      key cast( substring( domvalue_l, 1, 1 ) as pbe_transfer_qty_costs preserving type ) as ProjBillgTransfCostQtyCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                           as PrjBillgTransfCostQtyCodeTxt,

      _ProjBillgTransfCostQtyCode,
      _Language

}
where
      domname  = 'PBE_TRANSFER_QTY_COSTS'
      and as4local = 'A'
```
