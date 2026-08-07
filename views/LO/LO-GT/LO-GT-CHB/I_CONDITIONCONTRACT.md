---
name: I_CONDITIONCONTRACT
description: "Conditioncontract"
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
  - contract
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CONDITIONCONTRACT

**Conditioncontract**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  |  |  |
| `CndnContrType` |  | |  |  |  |  |
| `CndnContrClassfctnType` |  | |  |  |  |  |
| `CndnContrProcVar` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `AssignmentReference` |  | |  | `{ status: #DEPRECATED, successor: 'CndnContrAssgmtRef' } CndnContrAssgmtRef` |  |  |
| `CndnContrAssgmtRef` |  | |  |  |  |  |
| `ExternalDocumentReferenceID` |  | |  |  |  |  |
| `CndnContrExternalPartner` |  | |  |  |  |  |
| `CndnContrIsInactive` |  | |  | `CndnContrActvtnStatus` |  |  |
| `CndnContrValidFrom` |  | |  |  |  |  |
| `CndnContrValidTo` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `PriorSupplier` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreationTimeZone` |  | |  |  |  |  |
| `CreationUTCDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangedDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangeUTCDateTime` |  | |  |  |  |  |
| `CndnContrCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `CndnContrSuplrSettlmtCat` |  | |  |  |  |  |
| `CndnContrCustSettlmtCat` |  | |  |  |  |  |
| `SettlmtProduct` |  | |  |  |  |  |
| `FinalSettlmtCalendar` |  | |  |  |  |  |
| `PartialSettlmtCalendar` |  | |  |  |  |  |
| `DeltaSettlmtCalendar` |  | |  |  |  |  |
| `DeltaAccrualSettlmtCalendar` |  | |  |  |  |  |
| `AccrualClearingSettlmtCalendar` |  | |  |  |  |  |
| `CndnContrExtensionCalendar` |  | |  |  |  |  |
| `PrecedingConditionContract` |  | |  | `PrecedingConditionDocument` |  |  |
| `PrecedingConditionDocument` |  | |  |  |  |  |
| `CndnContrPurposeCat` |  | |  |  |  |  |
| `CndnContrSourceDocCat` |  | |  |  |  |  |
| `CndnContrSourceDoc` |  | |  |  |  |  |
| `CndnContrSourceDocItem` |  | |  |  |  |  |
| `BusVolTableGroup` |  | |  |  |  |  |
| `AmountFieldGroup` |  | |  |  |  |  |
| `CndnContrUnit` |  | |  |  |  |  |
| `CndnContrWeightUnit` |  | |  |  |  |  |
| `CndnContrVolumeUnit` |  | |  |  |  |  |
| `CndnContrPointsQtyUnit` |  | |  |  |  |  |
| `AccrualUpdateIsRequired` |  | |  |  |  |  |
| `CndnContrUUID` |  | |  |  |  |  |
| `CndnContrSourceUUID` |  | |  |  |  |  |
| `SettlmtPartTxRegnNmbr` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `SettlmtPartTxRegnCntry` |  | |  |  |  |  |
| `CndnContrPrcgDetnRlvnceCat` |  | |  |  |  |  |
| `CndnContrWorkerCostCenter` |  | |  |  |  |  |
| `CndnContrWorkerSettlmtCat` |  | |  |  |  |  |
| `DataController` |  | |  |  |  |  |
| `_CndnContrBusVolSelCriteria` | | ✓ | | | | |
| `_CndnContrSettlmtCal` | | ✓ | | | | |
| `_CndnContrConditionUsage` | | ✓ | | | | |
| `_CndnContrType` | | ✓ | | | | |
| `_CndnContrIsInactive` | | ✓ | | | | |
| `_PrecedingConditionContract` | | ✓ | | | | |
| `_PrecedingConditionDocument` | | ✓ | | | | |
| `_CndnContrClassfctnType` | | ✓ | | | | |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CndnContrCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_CndnContrSuplrSettlmtCat` | | ✓ | | | | |
| `_CndnContrCustSettlmtCat` | | ✓ | | | | |
| `_SettlmtProduct` | | ✓ | | | | |
| `_FinalSettlmtCalendar` | | ✓ | | | | |
| `_PartialSettlmtCalendar` | | ✓ | | | | |
| `_DeltaSettlmtCalendar` | | ✓ | | | | |
| `_DeltaAccrualSettlmtCalendar` | | ✓ | | | | |
| `_AccrualClearingSettlmtCal` | | ✓ | | | | |
| `_CndnContrExtensionCalendar` | | ✓ | | | | |
| `_CndnContrPurposeCat` | | ✓ | | | | |
| `_CndnContrSourceDocCat` | | ✓ | | | | |
| `_BusVolTableGroup` | | ✓ | | | | |
| `_AmountFieldGroup` | | ✓ | | | | |
| `_CndnContrUnit` | | ✓ | | | | |
| `_CndnContrWeightUnit` | | ✓ | | | | |
| `_CndnContrVolumeUnit` | | ✓ | | | | |
| `_CndnContrPointsQtyUnit` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_SettlmtPartTxRegnCntry` | | ✓ | | | | |
| `_CndnContrPrcgDetnRlvnceCat` | | ✓ | | | | |
| `_CndnContrWorkerSettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrBusVolSelCriteria` | `I_CndnContrBusVolSelCriteria` | [0..*] |
| `_CndnContrSettlmtCal` | `I_CndnContrSettlmtCal` | [0..*] |
| `_CndnContrConditionUsage` | `I_CndnContrConditionUsage` | [0..*] |
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_CndnContrIsInactive` | `I_CndnContrIsInactive` | [0..1] |
| `_PrecedingConditionContract` | `I_ConditionContract` | [0..1] |
| `_PrecedingConditionDocument` | `I_ConditionDocument` | [0..1] |
| `_Extension` | `E_ConditionContract` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ICNDNCNTR', 
    compiler.compareFilter: true
    }
@EndUserText.label: 'Condition Contract'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [  '_LastChangedByUser', '_CreatedByUser'  ]
    }
@ObjectModel: {
    representativeKey: 'ConditionContract',
    compositionRoot: true,
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #A,
      sizeCategory:   #XXL
      } 
    }
@ClientHandling: {
    type: #INHERITED,
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ConditionContract
  as select from R_ConditionContract

  association [0..*] to I_CndnContrBusVolSelCriteria as _CndnContrBusVolSelCriteria on $projection.ConditionContract = _CndnContrBusVolSelCriteria.ConditionContract
  association [0..*] to I_CndnContrSettlmtCal        as _CndnContrSettlmtCal        on $projection.ConditionContract = _CndnContrSettlmtCal.ConditionContract
  association [0..*] to I_CndnContrConditionUsage    as _CndnContrConditionUsage    on $projection.ConditionContract = _CndnContrConditionUsage.ConditionContract

  association [0..1] to I_CndnContrType              as _CndnContrType              on $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_CndnContrIsInactive        as _CndnContrIsInactive        on $projection.CndnContrIsInactive = _CndnContrIsInactive.CndnContrIsInactive

  association [0..1] to I_ConditionContract          as _PrecedingConditionContract on $projection.PrecedingConditionContract = _PrecedingConditionContract.ConditionContract
  association [0..1] to I_ConditionDocument          as _PrecedingConditionDocument on $projection.PrecedingConditionDocument = _PrecedingConditionDocument.ConditionDocument

  //Extension Association
  association [1..1] to E_ConditionContract          as _Extension                  on $projection.ConditionContract = _Extension.ConditionContract
{

  key ConditionContract,
      @ObjectModel.foreignKey.association: '_CndnContrType'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
      }
      CndnContrType,
      @ObjectModel.foreignKey.association: '_CndnContrClassfctnType'
      CndnContrClassfctnType,
      @ObjectModel.foreignKey.association: '_CndnContrProcVar'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrProcVarStdVH', element: 'CndnContrProcVar' } }]
      }
      CndnContrProcVar,
      DocumentReferenceID,
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'CndnContrAssgmtRef' }
      CndnContrAssgmtRef         as AssignmentReference,
      CndnContrAssgmtRef,
      ExternalDocumentReferenceID,
      CndnContrExternalPartner,
      @ObjectModel.foreignKey.association: '_CndnContrIsInactive'
      @Semantics.booleanIndicator: false
      CndnContrActvtnStatus      as CndnContrIsInactive,

      @Semantics.businessDate: { from: true }
      CndnContrValidFrom,
      @Semantics.businessDate: { to: true }
      CndnContrValidTo,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      Customer,
      @ObjectModel.foreignKey.association: '_PriorSupplier'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      PriorSupplier,
      @Consumption:{
        valueHelpDefinition: [{ entity: { name:'I_PersWrkAgrmtSrchHelp_1' , element: 'PersonWorkAgreement' } }]
      }
      PersonWorkAgreement,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      CreationTimeZone,
      @Semantics.systemDateTime.createdAt: true
      CreationUTCDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangedDate,
      LastChangeTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeUTCDateTime,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CndnContrCurrency'
      CndnContrCurrency,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      ExchangeRate,
      ExchangeRateDate,

      PaymentTerms,
      CashDiscount1Days,
      CashDiscount1Percent,
      CashDiscount2Days,
      CashDiscount2Percent,
      NetPaymentDays,
      //@ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,

      @ObjectModel.foreignKey.association: '_CndnContrSuplrSettlmtCat'
      CndnContrSuplrSettlmtCat,
      @ObjectModel.foreignKey.association: '_CndnContrCustSettlmtCat'
      CndnContrCustSettlmtCat,
      @ObjectModel.foreignKey.association: '_SettlmtProduct'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' } }]
      }
      SettlmtProduct,

      @ObjectModel.foreignKey.association: '_FinalSettlmtCalendar'
      FinalSettlmtCalendar,
      @ObjectModel.foreignKey.association: '_PartialSettlmtCalendar'
      PartialSettlmtCalendar,
      @ObjectModel.foreignKey.association: '_DeltaSettlmtCalendar'
      DeltaSettlmtCalendar,
      @ObjectModel.foreignKey.association: '_DeltaAccrualSettlmtCalendar'
      DeltaAccrualSettlmtCalendar,
      @ObjectModel.foreignKey.association: '_AccrualClearingSettlmtCal'
      AccrualClearingSettlmtCalendar,
      @ObjectModel.foreignKey.association: '_CndnContrExtensionCalendar'
      CndnContrExtensionCalendar,

      @API.element:{releaseState: #DEPRECATED, successor: 'PrecedingConditionDocument'}
      @ObjectModel.foreignKey.association: '_PrecedingConditionContract'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      PrecedingConditionDocument as PrecedingConditionContract,

      PrecedingConditionDocument,

      @ObjectModel.foreignKey.association: '_CndnContrPurposeCat'
      CndnContrPurposeCat,

      @ObjectModel.foreignKey.association: '_CndnContrSourceDocCat'
      CndnContrSourceDocCat,
      CndnContrSourceDoc,
      CndnContrSourceDocItem,

      @ObjectModel.foreignKey.association: '_BusVolTableGroup'
      BusVolTableGroup,
      @ObjectModel.foreignKey.association: '_AmountFieldGroup'
      AmountFieldGroup,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CndnContrUnit'
      CndnContrUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CndnContrWeightUnit'
      CndnContrWeightUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CndnContrVolumeUnit'
      CndnContrVolumeUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CndnContrPointsQtyUnit'
      CndnContrPointsQtyUnit,

      AccrualUpdateIsRequired,

      CndnContrUUID,
      CndnContrSourceUUID,

      SettlmtPartTxRegnNmbr,
      TaxCountry,
      SettlmtPartTxRegnCntry,
      CndnContrPrcgDetnRlvnceCat,

      /* Worker related fields */
      CndnContrWorkerCostCenter,
      CndnContrWorkerSettlmtCat,

      DataController,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CndnContrBusVolSelCriteria,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CndnContrSettlmtCal,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CndnContrConditionUsage,
      _CndnContrType,
      _CndnContrClassfctnType,
      _CndnContrProcVar,
      _CndnContrIsInactive,
      _Supplier,
      _Customer,
      _PriorSupplier,
      _PersonWorkAgreement,
      _CompanyCode,
      _PurchasingOrganization,
      _PurchasingGroup,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      _SalesOffice,
      _CreatedByUser,
      _LastChangedByUser,
      _CndnContrCurrency,
      _ExchangeRateType,
      //  _PaymentMethod,
      _CndnContrSuplrSettlmtCat,
      _CndnContrCustSettlmtCat,
      _SettlmtProduct,
      _FinalSettlmtCalendar,
      _PartialSettlmtCalendar,
      _DeltaSettlmtCalendar,
      _DeltaAccrualSettlmtCalendar,
      _AccrualClearingSettlmtCal,
      _CndnContrExtensionCalendar,
      @API.element:{releaseState: #DEPRECATED, successor: '_PrecedingConditionDocument'}
      _PrecedingConditionContract,
      _PrecedingConditionDocument,
      _CndnContrPurposeCat,
      _CndnContrSourceDocCat,
      _BusVolTableGroup,
      _AmountFieldGroup,
      _CndnContrUnit,
      _CndnContrWeightUnit,
      _CndnContrVolumeUnit,
      _CndnContrPointsQtyUnit,
      _TaxCountry,
      _SettlmtPartTxRegnCntry,
      _CndnContrPrcgDetnRlvnceCat,
      _CndnContrWorkerSettlmtCat

}
```
