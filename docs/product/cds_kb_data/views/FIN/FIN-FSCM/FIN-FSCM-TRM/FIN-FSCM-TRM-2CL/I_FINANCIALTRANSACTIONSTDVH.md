---
name: I_FINANCIALTRANSACTIONSTDVH
description: "Financialtransactionstdvh"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - value-help
  - standard-value-help
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONSTDVH

**Financialtransactionstdvh**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `FinancialTransaction` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FinancialInstrTransactionType` |  | |  |  |  |  |
| `FinancialInstrumentProductType` |  | |  |  |  |  |
| `Counterparty` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserDescription` |  | | `_CreatedBy` | `FullName` |  |  |
| `FinTransCreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangedByUserDescription` |  | | `_LastChangedBy` | `FullName` |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `FinancialInstrumentStatus` |  | |  |  |  |  |
| `Portfolio` |  | |  |  |  |  |
| `SecurityAccount` |  | |  |  |  |  |
| `_CreatedBy` | | ✓ | | | | |
| `_LastChangedBy` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedBy` | `I_UserContactCard` | [0..1] |
| `_LastChangedBy` | `I_UserContactCard` | [0..1] |

## Source Code

```abap
//GENERATED:001:E6ExH29r7jUzzJ}fF{7DBm
@AbapCatalog.sqlViewName: 'IFTRFT__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinancialTransaction'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'FinancialTransaction'
@Consumption.ranked: true
@Search.searchable: true
@AccessControl.privilegedAssociations: [ '_CreatedBy','_LastChangedBy' ]
@AccessControl.personalData.blocking: #NOT_REQUIRED

define view I_FinancialTransactionStdVH
  as select from I_FinancialTransaction
  association [0..1] to I_UserContactCard as _CreatedBy     on $projection.CreatedByUser = _CreatedBy.ContactCardID
  association [0..1] to I_UserContactCard as _LastChangedBy on $projection.LastChangedByUser = _LastChangedBy.ContactCardID
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem.importance: #HIGH
  key FinancialTransaction,

      @Consumption.valueHelpDefinition: [{entity:{
                                                    name:    'I_CompanyCodeStdVH',
                                                    element: 'CompanyCode'
                                                 }
      }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem.importance: #HIGH
  key CompanyCode,

      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @Consumption.valueHelpDefinition: [{entity:{
                                                    name:    'I_FinancialInstrTransType',
                                                    element: 'FinancialInstrTransactionType'
                                                 }
      }]
      @UI.lineItem.importance: #HIGH
      FinancialInstrTransactionType,

      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @Consumption.valueHelpDefinition: [{entity:{
                                                      name:     'I_FinancialinstrProductType',
                                                      element:  'FinancialInstrumentProductType'
                                                  }
      }]
      @UI.lineItem.importance: #HIGH
      FinancialInstrumentProductType,

      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @Consumption.valueHelpDefinition: [{entity:{
                                                      name:     'I_FinTransacCounterPartyStdVH',
                                                      element:  'BusinessPartner'
                                                  }
      }]
      Counterparty,

      @Consumption.hidden: true
      CreatedByUser,
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label: 'Created By'
      @Semantics.text: true
      _CreatedBy.FullName     as CreatedByUserDescription,
      @Consumption.filter: {selectionType: #INTERVAL}
      FinTransCreationDate,
      @Consumption.hidden: true
      LastChangedByUser,
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label: 'Last Changed By'
      @Semantics.text: true
      _LastChangedBy.FullName as LastChangedByUserDescription,
      @Consumption.filter: {selectionType: #INTERVAL}
      LastChangeDate,
      @Consumption.valueHelpDefinition: [{entity:{
                                                      name:     'I_FinInstrumentStatus',
                                                      element:  'FinancialInstrumentStatus'
                                                  }
      }]
      FinancialInstrumentStatus,
      @Consumption.valueHelpDefinition: [{entity:{
                                                  name:     'I_TreasuryPortfolio',
                                                  element:  'Portfolio'
                                              }
      }]
      Portfolio,
      @Consumption.hidden: true
      SecurityAccount,

      @Consumption.hidden: true
      _CreatedBy,
      @Consumption.hidden: true
      _LastChangedBy,
      @Consumption.hidden: true
      _CompanyCode
}
```
