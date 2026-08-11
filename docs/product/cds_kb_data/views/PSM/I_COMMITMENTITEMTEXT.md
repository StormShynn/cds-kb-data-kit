---
name: I_COMMITMENTITEMTEXT
description: "Commitment Item - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMTEXT')/$value
semantic_en: "Commitment Item - Text"
semantic_vi: "Commitment Item - Text — CDS view giao diện dựa trên fmcit."
keywords:
  - "commitment"
  - "item"
  - "text"
  - "language"
  - "financial"
  - "management"
  - "area"
  - "mgmt"
  - "fiscal"
  - "year"
  - "name"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_COMMITMENTITEMTEXT

**Commitment Item - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FinancialManagementArea` | ✓ | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `FinMgmtAreaFiscalYear` | ✓ | |  | `cast( gjahr as fmis_fma_fiscal_year preserving type )` | `NUMC(4)` | Fiscal Year for Financial Management Area |
| `CommitmentItem` | ✓ | |  | `fipex` | `CHAR(24)` | Commitment Item |
| `CommitmentItemName` |  | |  | `cast( bezei as fmis_commitment_item_name preserving type )` | `CHAR(20)` | Commitment Item Name |
| `CommitmentItemDescription` |  | |  | `cast( text1 as fmis_ci_description preserving type )` | `CHAR(50)` | Commitment Item Description |
| `CommitmentItemDescription2` |  | |  | `cast( text2 as fmis_ci_description2 preserving type )` | `CHAR(50)` | Commitment Item Description 2 |
| `CommitmentItemDescription3` |  | |  | `cast( text3 as fmis_ci_description3 preserving type )` | `CHAR(50)` | Commitment Item Description 3 |
| `_Language` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |
| `_FinMgmtFiscalYear` | | ✓ | | | | |
| `_CommitmentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_FinMgmtFiscalYear` | `I_FiscalYearForFinMgmtArea` | [1..1] |
| `_CommitmentItem` | `I_CommitmentItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMTEXT')/$value)*

```abap
@EndUserText.label: 'Commitment Item - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'CommitmentItem'
@ObjectModel.usageType: { 
  sizeCategory: #M,
  serviceQuality: #A,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ICOMMITEMT'
define view I_CommitmentItemText
  as select from fmcit
  association [0..1] to I_Language                 as _Language          on  $projection.Language = _Language.Language
  association [1..1] to I_FinancialManagementArea  as _FinMgmtArea       on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  association [1..1] to I_FiscalYearForFinMgmtArea as _FinMgmtFiscalYear on  $projection.FinancialManagementArea = _FinMgmtFiscalYear.FinancialManagementArea
                                                                         and $projection.FinMgmtAreaFiscalYear   = _FinMgmtFiscalYear.FinMgmtAreaFiscalYear
  association [0..1] to I_CommitmentItem           as _CommitmentItem    on  $projection.FinancialManagementArea = _CommitmentItem.FinancialManagementArea   //for authorization check
                                                                         and $projection.FinMgmtAreaFiscalYear   = _CommitmentItem.FinMgmtAreaFiscalYear
                                                                         and $projection.CommitmentItem          = _CommitmentItem.CommitmentItem

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                                                                            as Language,
      //--[ GENERATED:011:GFBfhyK17jY4g{lgBXRgP0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key fikrs                                                                                                            as FinancialManagementArea,
      //--[ GENERATED:011:GFBfhyK17jY4g{lgBXRgP0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FsclYrForFinMgmtAreaStdVH',
                     element: 'FinMgmtAreaFiscalYear' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_FinMgmtFiscalYear'
  key cast( gjahr as fmis_fma_fiscal_year preserving type )                                                            as FinMgmtAreaFiscalYear,
      //--[ GENERATED:011:GFBfhyK17jY4g{lgBXRgP0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CommitmentItemStdVH',
                     element: 'CommitmentItem' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' },
                              { localElement: 'FinMgmtAreaFiscalYear',
                                element: 'FinMgmtAreaFiscalYear' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CommitmentItem'
  key fipex                                                                                                            as CommitmentItem,
      @Semantics.text: true
      cast( bezei as fmis_commitment_item_name preserving type )                                                       as CommitmentItemName,
      cast( text1 as fmis_ci_description preserving type )                                                             as CommitmentItemDescription,
      cast( text2 as fmis_ci_description2 preserving type )                                                            as CommitmentItemDescription2,
      cast( text3 as fmis_ci_description3 preserving type )                                                            as CommitmentItemDescription3,

      _Language,
      _FinMgmtArea,
      _FinMgmtFiscalYear,
      _CommitmentItem

};
```
