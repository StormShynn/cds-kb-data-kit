---
name: I_CNDNCONTRCONDITIONUSAGE
description: "Cndncontrconditionusage"
app_component: LO-GT-CHB
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
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - pricing-condition
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRCONDITIONUSAGE

**Cndncontrconditionusage**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
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
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingProcedureStep` |  | |  |  |  |  |
| `PricingProcedureCounter` |  | |  |  |  |  |
| `ConditionContract` |  | |  |  |  |  |
| `CndnContrUUID` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  | `cast( '00' as kopos preserving type )` |  |  |
| `ConditionSequentialNumberShort` |  | |  |  |  |  |
| `CndnContrAccrRvslSts` |  | |  |  |  |  |
| `AccrSrceDocCategory` |  | |  |  |  |  |
| `AccrSrceDocument` |  | |  |  |  |  |
| `AccrSrceDocumentYear` |  | |  |  |  |  |
| `AccrSrceDocumentItem` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  | `cast( AccrSrceDocCurrency as waers preserving type )` |  |  |
| `AR_DocumentPostingDate` |  | |  | `cast( AccrSrceDocPostingDate as wcb_wcocof_budat preserving type )` |  |  |
| `AccrSrceDocPostingDate` |  | |  |  |  |  |
| `SettlmtDate` |  | |  |  |  |  |
| `SettlmtDateSequentialID` |  | |  |  |  |  |
| `RefSettlmtDate` |  | |  |  |  |  |
| `RefSettlmtDateSequentialID` |  | |  |  |  |  |
| `FiscalYear` |  | |  | `AccrSrceDocFiscalYear` |  |  |
| `Plant` |  | |  | `AccrSrceDocItemPlant` |  |  |
| `CompanyCode` |  | |  | `AccrSrceDocCompanyCode` |  |  |
| `CndnContrAccrSource` |  | |  |  |  |  |
| `BillingDocument` |  | |  |  |  |  |
| `BillingDocumentItem` |  | |  |  |  |  |
| `_ConditionContract` | | ✓ | | | | |
| `_CndnContrAccrRvslSts` | | ✓ | | | | |
| `_PricingConditionType` | | ✓ | | | | |
| `_ConditionCurrency` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_CndnContrAccrSource` | | ✓ | | | | |
| `_BillingDocument` | | ✓ | | | | |
| `_BillingDocumentItem` | | ✓ | | | | |
| `_CndnContrAccrSrceDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionContract` | `I_ConditionContract` | [1..1] |
| `_CndnContrAccrRvslSts` | `I_CndnContrAccrRvslSts` | [0..1] |
| `_PricingConditionType` | `I_PricingConditionType` | [0..1] |
| `_ConditionCurrency` | `I_Currency` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Condition Contract Condition Usage'
@VDM: { 
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    representativeKey: 'DocRelationshipUUID',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #C,
      sizeCategory:   #XXL
      }
    } 
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'ICCCNDNUSG'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions:true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrConditionUsage
  as select from R_CndnContrConditionUsage

  association [1..1] to I_ConditionContract    as _ConditionContract    on  $projection.ConditionContract = _ConditionContract.ConditionContract
  association [0..1] to I_CndnContrAccrRvslSts as _CndnContrAccrRvslSts on  $projection.CndnContrAccrRvslSts = _CndnContrAccrRvslSts.CndnContrAccrRvslSts

  association [0..1] to I_PricingConditionType as _PricingConditionType on  $projection.ConditionApplication = _PricingConditionType.ConditionApplication
                                                                        and $projection.ConditionType        = _PricingConditionType.ConditionType
  association [0..1] to I_Currency             as _ConditionCurrency    on  $projection.ConditionCurrency = _ConditionCurrency.Currency
  association [0..1] to I_Plant                as _Plant                on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode          as _CompanyCode          on  $projection.CompanyCode = _CompanyCode.CompanyCode

{

  key DocRelationshipUUID,
      PricingDocument,
      PricingProcedureStep,
      PricingProcedureCounter,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      ConditionContract,
      CndnContrUUID,
      ConditionRecord,
      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionSequentialNumberShort'}
      cast( '00' as kopos preserving type )                              as ConditionSequentialNumber,
      ConditionSequentialNumberShort,
      @ObjectModel.foreignKey.association: '_CndnContrAccrRvslSts'
      CndnContrAccrRvslSts,
      
      AccrSrceDocCategory,
      AccrSrceDocument,
      AccrSrceDocumentYear,
      AccrSrceDocumentItem,

      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      ConditionType,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @DefaultAggregation: #SUM
      ConditionAmount,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      cast( AccrSrceDocCurrency as waers preserving type )               as ConditionCurrency,
      @API.element:{releaseState: #DEPRECATED, successor: 'AccrSrceDocPostingDate'}
      cast( AccrSrceDocPostingDate as wcb_wcocof_budat preserving type ) as AR_DocumentPostingDate,
      AccrSrceDocPostingDate,
      SettlmtDate,
      SettlmtDateSequentialID,
      RefSettlmtDate,
      RefSettlmtDateSequentialID,
      AccrSrceDocFiscalYear                                              as FiscalYear,
      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' } }]
      }
      AccrSrceDocItemPlant                                               as Plant,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      AccrSrceDocCompanyCode                                             as CompanyCode,

      @ObjectModel.foreignKey.association: '_CndnContrAccrSource'
      CndnContrAccrSource,

      /* Material Document*/
      //MaterialDocumentYear,
      //MaterialDocument,
      //MaterialDocumentItem,

      /* Settlement Management Document*/
      //SettlmtMgmtDoc,
      //SettlmtMgmtDocItem,

      /* Billing Document*/
      @ObjectModel.foreignKey.association: '_BillingDocument'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } }]
      }
      BillingDocument,
      @ObjectModel.foreignKey.association: '_BillingDocumentItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentItemStdVH', element: 'BillingDocumentItem' } }]
      }
      BillingDocumentItem,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ConditionContract,
      _CndnContrAccrRvslSts,
      _ConditionApplication,
      _PricingConditionType,
      _ConditionCurrency,
      _Plant,
      _CompanyCode,
      _CndnContrAccrSource,
      _BillingDocument,
      _BillingDocumentItem,
      _CndnContrAccrSrceDocCat

}
```
