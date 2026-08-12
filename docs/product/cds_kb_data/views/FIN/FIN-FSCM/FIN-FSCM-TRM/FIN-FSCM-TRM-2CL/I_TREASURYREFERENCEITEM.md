---
name: I_TREASURYREFERENCEITEM
description: "Treasuryreferenceitem"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - item-level
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREFERENCEITEM

**Treasuryreferenceitem**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceCategory` | ✓ | |  | `cast( reftyp as trsy_ref_cat preserving type )` |  |  |
| `TreasuryReferenceNumber` | ✓ | |  | `cast( refnr as trsy_ref_nmbr preserving type )` |  |  |
| `TreasuryFinancialObject` | ✓ | |  | `objnr` |  |  |
| `TreasuryReferenceItemStatus` |  | |  | `cast( status as trsy_ref_item_status preserving type )` |  |  |
| `TreasuryReferenceItemRanking` |  | |  | `cast( rrang as trsy_ref_item_ranking preserving type )` |  |  |
| `TrsyReferenceItemCreatedByUser` |  | |  | `cast( cruser as trsy_ref_item_cruser preserving type )` |  |  |
| `TrsyReferenceItemCreationDate` |  | |  | `cast( dcrdat as trsy_ref_item_dcrdat preserving type )` |  |  |
| `TrsyReferenceItemCreationTime` |  | |  | `cast( tcrtim as trsy_ref_item_tcrtim preserving type )` |  |  |
| `TrsyRefItemLastChangedByUser` |  | |  | `cast( upuser as trsy_ref_item_upuser preserving type )` |  |  |
| `TrsyRefItemLastChangeDate` |  | |  | `cast( dupdat as trsy_ref_item_dupdat preserving type )` |  |  |
| `TrsyRefItemLastChangeTime` |  | |  | `cast( tuptim as trsy_ref_item_tuptim preserving type )` |  |  |
| `TreasuryReferenceStatus` |  | | `_TreasuryReference` | `TreasuryReferenceStatus` |  |  |
| `_FinancialTransaction` | | ✓ | | | | |
| `_TreasuryReferenceCategory` | | ✓ | | | | |
| `_TreasuryReference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_TreasuryReferenceCategory` | `I_TreasuryReferenceCategory` | [1..1] |
| `_TreasuryReference` | `I_TreasuryReference` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Reference Item Information'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#ANALYTICAL_DIMENSION,  #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'TreasuryFinancialObject',
  sapObjectNodeType.name: 'TreasuryReferenceItem'
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL,
  dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping:
        [
        {
            role: #MAIN,
            table: 'REFON',
            viewElement: [ 'TreasuryReferenceCategory', 'TreasuryReferenceNumber', 'TreasuryFinancialObject' ],
            tableElement: [ 'REFTYP', 'REFNR', 'OBJNR' ]
        },
        {
            role: #LEFT_OUTER_TO_ONE_JOIN,
            table: 'REFH',
            viewElement: [ 'TreasuryReferenceCategory', 'TreasuryReferenceNumber'],
            tableElement: [ 'REFTYP', 'REFNR' ]
        }
    ]
    }
  }
}
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
define view entity I_TreasuryReferenceItem
  as select from refon
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_FinancialTransaction      as _FinancialTransaction      on  $projection.TreasuryFinancialObject = _FinancialTransaction.TreasuryFinancialObject
  association [1..1] to I_TreasuryReferenceCategory as _TreasuryReferenceCategory on  $projection.TreasuryReferenceCategory = _TreasuryReferenceCategory.TreasuryReferenceCategory
  association [1..1] to I_TreasuryReference         as _TreasuryReference         on  $projection.TreasuryReferenceCategory = _TreasuryReference.TreasuryReferenceCategory
                                                                                  and $projection.TreasuryReferenceNumber   = _TreasuryReference.TreasuryReferenceNumber
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TreasuryReferenceCategory'
  key cast( reftyp as trsy_ref_cat preserving type )         as TreasuryReferenceCategory,
      @ObjectModel.foreignKey.association: '_TreasuryReference'
  key cast( refnr  as trsy_ref_nmbr preserving type )        as TreasuryReferenceNumber,
  key objnr                                                  as TreasuryFinancialObject,
      /* end suppress warning shlporigin_not_inherited */
      cast( status as trsy_ref_item_status preserving type ) as TreasuryReferenceItemStatus,
      cast( rrang as trsy_ref_item_ranking preserving type ) as TreasuryReferenceItemRanking,
      cast( cruser as trsy_ref_item_cruser preserving type ) as TrsyReferenceItemCreatedByUser,
      cast( dcrdat as trsy_ref_item_dcrdat preserving type ) as TrsyReferenceItemCreationDate,
      cast( tcrtim as trsy_ref_item_tcrtim preserving type ) as TrsyReferenceItemCreationTime,
      cast( upuser as trsy_ref_item_upuser preserving type ) as TrsyRefItemLastChangedByUser,
      cast( dupdat as trsy_ref_item_dupdat preserving type ) as TrsyRefItemLastChangeDate,
      cast( tuptim as trsy_ref_item_tuptim preserving type ) as TrsyRefItemLastChangeTime,
      _TreasuryReference.TreasuryReferenceStatus,

      _FinancialTransaction,
      _TreasuryReferenceCategory,
      _TreasuryReference
}
```
