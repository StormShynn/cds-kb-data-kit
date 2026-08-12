---
name: I_FUNDSCENTERTEXT
description: "Funds Center - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value
semantic_en: "Funds Center - Text"
semantic_vi: "Funds Center - Text — CDS view giao diện (master data) dựa trên fmfctrt."
keywords:
  - "funds"
  - "center"
  - "text"
  - "language"
  - "financial"
  - "management"
  - "area"
  - "validity"
  - "date"
  - "start"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDSCENTERTEXT

**Funds Center - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FinancialManagementArea` | ✓ | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `FundsCenter` | ✓ | |  | `fictr` | `CHAR(16)` | Funds Center |
| `ValidityEndDate` | ✓ | |  | `cast( datbis as fmis_fc_validityenddate preserving type )` | `DATS(8)` | Funds Center Validity End Date |
| `ValidityStartDate` |  | |  | `cast( datab as fmis_fc_validitystartdate preserving type)` | `DATS(8)` | Funds Center Validity Start Date |
| `FundsCenterName` |  | |  | `cast( bezeich as fmis_fc_name preserving type )` | `CHAR(20)` | Funds Center Name |
| `FundsCenterDescription` |  | |  | `cast( beschr as fmis_fc_description preserving type )` | `CHAR(40)` | Funds Center Description |
| `FundsCenterSearchTerm` |  | |  | `mctxt` | `CHAR(20)` | Search Term for Matchcode Search |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_FundsCenterForAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_FundsCenterForAuthzn` | `I_FundsCenter` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDSCENTERTEXT')/$value)*

```abap
@EndUserText.label: 'Funds Center - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  representativeKey: 'FundsCenter',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE],
  dataCategory: #TEXT
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFUNDSCENTERTEXT'
define view I_FundsCenterText
  as select from fmfctrt
  association [1..1] to I_FinancialManagementArea as _FinMgmtArea          on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  association [0..1] to I_Language                as _Language             on  $projection.Language = _Language.Language
  association [0..1] to I_FundsCenter             as _FundsCenterForAuthzn on  $projection.FinancialManagementArea = _FundsCenterForAuthzn.FinancialManagementArea
                                                                           and $projection.FundsCenter             = _FundsCenterForAuthzn.FundsCenter
                                                                           and $projection.ValidityEndDate         = _FundsCenterForAuthzn.ValidityEndDate
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                                                                      as Language,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key fikrs                                                                                                      as FinancialManagementArea,
  key fictr                                                                                                      as FundsCenter,
      @Semantics.businessDate.to: true
  key cast( datbis as fmis_fc_validityenddate preserving type )                                                  as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast( datab as fmis_fc_validitystartdate preserving type)                                                  as ValidityStartDate,
      @Semantics.text: true
      cast( bezeich as fmis_fc_name preserving type )                                                            as FundsCenterName,
      @Semantics.text: true
      cast( beschr as fmis_fc_description preserving type )                                                      as FundsCenterDescription,
      @Semantics.text: true
      mctxt                                                                                                      as FundsCenterSearchTerm,

      _FinMgmtArea,
      _Language,
      _FundsCenterForAuthzn

}
```
