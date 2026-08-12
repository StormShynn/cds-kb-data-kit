---
name: I_FUNDTEXT
description: "Fundtext"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - text-view
  - text
  - component:PSM
  - lob:Other
---
# I_FUNDTEXT

**Fundtext**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `fikrs` |  |  |
| `Fund` | ✓ | |  | `fincode` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `FundName` |  | |  | `cast( bezeich as fmis_fund_name preserving type )` |  |  |
| `FundDescription` |  | |  | `cast( beschr as fmis_fund_description preserving type )` |  |  |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_Fund` | `I_Fund` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fund - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'Fund'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFUNDTEXT'
@AbapCatalog.preserveKey: true

define view I_FundText
  as select from fmfint
  association [1..1] to I_FinancialManagementArea as _FinMgmtArea on  $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
  association [1..1] to I_Language                as _Language    on  $projection.Language = _Language.Language
  association [0..1] to I_Fund                    as _Fund        on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                  and $projection.Fund                    = _Fund.Fund
{

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key fikrs                                                                        as FinancialManagementArea,
  key fincode                                                                      as Fund,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                                        as Language,
      @Semantics.text: true
    //  @Search.ranking: #LOW
      cast( bezeich as fmis_fund_name preserving type )                            as FundName,
      @Semantics.text: true
  //    @Search.ranking: #LOW
      cast( beschr as fmis_fund_description preserving type )                      as FundDescription,

      _FinMgmtArea,
      _Language,
      _Fund

}
```
