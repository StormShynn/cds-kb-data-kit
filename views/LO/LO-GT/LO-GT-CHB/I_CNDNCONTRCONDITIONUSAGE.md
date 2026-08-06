---
name: I_CNDNCONTRCONDITIONUSAGE
description: Cndncontrconditionusage
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DocRelationshipUUID` | `DocRelationshipUUID` |
| `PricingDocument` | `PricingDocument` |
| `PricingProcedureStep` | `PricingProcedureStep` |
| `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionContract` | `}] } ConditionContract` |
| `CndnContrUUID` | `CndnContrUUID` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `cast( '00' as kopos preserving type )` |
| `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `CndnContrAccrRvslSts` | `CndnContrAccrRvslSts` |
| `AccrSrceDocCategory` | `AccrSrceDocCategory` |
| `AccrSrceDocument` | `AccrSrceDocument` |
| `AccrSrceDocumentYear` | `AccrSrceDocumentYear` |
| `AccrSrceDocumentItem` | `AccrSrceDocumentItem` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionAmount` | `ConditionAmount` |
| `ConditionCurrency` | `cast( AccrSrceDocCurrency as waers preserving type )` |
| `AR_DocumentPostingDate` | `cast( AccrSrceDocPostingDate as wcb_wcocof_budat preserving type )` |
| `AccrSrceDocPostingDate` | `AccrSrceDocPostingDate` |
| `SettlmtDate` | `SettlmtDate` |
| `SettlmtDateSequentialID` | `SettlmtDateSequentialID` |
| `RefSettlmtDate` | `RefSettlmtDate` |
| `RefSettlmtDateSequentialID` | `RefSettlmtDateSequentialID` |
| `FiscalYear` | `AccrSrceDocFiscalYear` |
| `Plant` | `}] } AccrSrceDocItemPlant` |
| `CompanyCode` | `}] } AccrSrceDocCompanyCode` |
| `CndnContrAccrSource` | `CndnContrAccrSource` |
| `BillingDocument` | `}] } BillingDocument` |
| `BillingDocumentItem` | `}] } BillingDocumentItem` |
| `_ConditionContract` | *Association* |
| `_CndnContrAccrRvslSts` | *Association* |
| `_PricingConditionType` | *Association* |
| `_ConditionCurrency` | *Association* |
| `_Plant` | *Association* |
| `_CompanyCode` | *Association* |
| `_ConditionApplication` | *Association* |
| `_CndnContrAccrSource` | *Association* |
| `_BillingDocument` | *Association* |
| `_BillingDocumentItem` | *Association* |
| `_CndnContrAccrSrceDocCat` | *Association* |

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
