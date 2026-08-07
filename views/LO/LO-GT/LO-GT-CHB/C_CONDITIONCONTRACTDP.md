---
name: C_CONDITIONCONTRACTDP
description: Condition Contract
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDP')/$value
semantic_en: Condition Contract
semantic_vi: Condition Contract — CDS view tiêu dùng dựa trên R_ConditionContract.
keywords:
  - Condition Contract
  - condition
  - contract
  - cndn
  - contr
  - type
  - classfctn
  - proc
  - document
  - reference
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - contract
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# C_CONDITIONCONTRACTDP

**Condition Contract**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `CndnContrClassfctnType` |  | |  |  | `CHAR(2)` | Condition Contract Category |
| `CndnContrProcVar` |  | |  |  | `CHAR(4)` | Condition Contract Process Variant |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Condition Contract: Reference |
| `CndnContrAssgmtRef` |  | |  |  | `CHAR(16)` | Condition Contract: Assignment |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `CndnContrExternalPartner` |  | |  |  | `CHAR(10)` | Condition Contract: External Partner |
| `CndnContrActvtnStatus` |  | |  |  | `CHAR(1)` | Condition Contract Activation Status |
| `CndnContrValidFrom` |  | |  |  | `DATS(8)` | Valid From |
| `CndnContrValidTo` |  | |  |  | `DATS(8)` | Valid To |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier as Partner of a Condition Contract |
| `Customer` |  | |  |  | `CHAR(10)` | Customer as Partner of a Condition Contract |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Condition Contract Created By |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Condition Contract Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Condition Contract Creation |
| `CreationTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `CreationUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp of Condition Contract Creation |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Condition Contract Last Changed By |
| `LastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Condition Contract Change |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Last Condition Contract Change |
| `LastChangeUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp of Last Condition Contract Change |
| `CndnContrCurrency` |  | |  |  | `CUKY(5)` | Currency of Condition Contract |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate (no Conversion) |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Conversion Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | First Payment in Days |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Discount for First Payment in % |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Second Payment in Days |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Discount for Second Payment in % |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Cash Discount Days |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CndnContrSuplrSettlmtCat` |  | |  |  | `CHAR(1)` | Supplier Settlement Category |
| `CndnContrCustSettlmtCat` |  | |  |  | `CHAR(1)` | Customer Settlement Category |
| `SettlmtProduct` |  | |  |  | `CHAR(40)` | Settlement Product |
| `FinalSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Final Settlement |
| `PartialSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Partial Settlement |
| `DeltaSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Delta Settlement |
| `DeltaAccrualSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Delta Accruals Settlement |
| `AccrualClearingSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Accruals Deferral Settlement |
| `CndnContrExtensionCalendar` |  | |  |  | `CHAR(2)` | Calendar for Condition Contract Extension |
| `PrecedingConditionContract` |  | |  | `PrecedingConditionDocument` | `CHAR(10)` | Predecessor Condition Contract |
| `CndnContrPurposeCat` |  | |  |  | `CHAR(2)` | Condition Contract Purpose Category |
| `CndnContrSourceDocCat` |  | |  |  | `CHAR(2)` | External Reference Document Category |
| `CndnContrSourceDoc` |  | |  |  | `CHAR(32)` | External Reference |
| `CndnContrSourceDocItem` |  | |  |  | `NUMC(10)` | External Reference Item |
| `BusVolTableGroup` |  | |  |  | `CHAR(4)` | Business Volume Table Group |
| `AmountFieldGroup` |  | |  |  | `CHAR(4)` | Amount Fields Group |
| `CndnContrUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Measure |
| `CndnContrWeightUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Weight |
| `CndnContrVolumeUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Volume |
| `CndnContrPointsQtyUnit` |  | |  |  | `UNIT(3)` | Settlement Points Unit |
| `AccrualUpdateIsRequired` |  | |  |  | `CHAR(1)` | Accruals Update Required |
| `CndnContrUUID` |  | |  |  | `RAW(16)` | Condition Contract GUID |
| `CndnContrSourceUUID` |  | |  |  | `RAW(16)` | External Condition Contract GUID |
| `SettlmtPartTxRegnNmbr` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `SettlmtPartTxRegnCntry` |  | |  |  | `CHAR(3)` | Partner Tax Country/Region |
| `CndnContrPrcgDetnRlvnceCat` |  | |  |  | `CHAR(1)` | CC Determination Relevance in Pricing (Condition Contract) |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
| `CndnContrWorkerSettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Type Worker |
| `DataController` |  | |  |  | `CHAR(30)` | Data Controller |
| `CndnContrSemanticCode` |  | |  |  | `NUMC(4)` | Semantic Type |
| `CndnContrProcessCategory` |  | |  |  | `CHAR(2)` | Process Category of a Condition Contract |
| `CndnContrPartnerCat` |  | |  |  | `CHAR(2)` | Type of Business Partner for Condition Contract |
| `CndnContrSettlmtType` |  | |  |  | `CHAR(1)` | Conditon Contract Settlement Type |
| `_CndnContrSettlmtCal` | | ✓ | | | | |
| `_CndnContrBusVolSelCriteria` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrSettlmtCal` | `C_CndnContrSettlmtCalDP` | [0..*] |
| `_CndnContrBusVolSelCriteria` | `C_CndnContrBusVolSelCriteriaDP` | [0..*] |
| `_Extension` | `E_ConditionContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDP')/$value)*

```abap
@EndUserText.label: 'Condition Contract'
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [
    '_CndnContrSettlmtCal',
    '_CndnContrBusVolSelCriteria'
  ]
}
@ObjectModel: {
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'ConditionContract',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  usageType: {
    serviceQuality: #A,
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XXL
  }
}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #CONSUMPTION
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity C_ConditionContractDP
  as select from R_ConditionContract

  association [0..*] to C_CndnContrSettlmtCalDP        as _CndnContrSettlmtCal        on $projection.ConditionContract = _CndnContrSettlmtCal.ConditionContract
  association [0..*] to C_CndnContrBusVolSelCriteriaDP as _CndnContrBusVolSelCriteria on $projection.ConditionContract = _CndnContrBusVolSelCriteria.ConditionContract

  association [1..1] to E_ConditionContract            as _Extension                  on $projection.ConditionContract = _Extension.ConditionContract

{
  key ConditionContract,

      CndnContrType,

      CndnContrClassfctnType,

      CndnContrProcVar,

      DocumentReferenceID,

      CndnContrAssgmtRef,

      ExternalDocumentReferenceID,

      CndnContrExternalPartner,

      CndnContrActvtnStatus,

      CndnContrValidFrom,

      CndnContrValidTo,

      Supplier,

      Customer,

      PriorSupplier,

      CompanyCode,

      PurchasingOrganization,

      PurchasingGroup,

      SalesOrganization,

      DistributionChannel,

      Division,

      SalesGroup,

      SalesOffice,

      CreatedByUser,

      CreationDate,

      CreationTime,

      CreationTimeZone,

      CreationUTCDateTime,

      LastChangedByUser,

      LastChangedDate,

      LastChangeTime,

      LastChangeUTCDateTime,

      CndnContrCurrency,

      ExchangeRateType,

      ExchangeRate,

      ExchangeRateDate,

      PaymentTerms,

      CashDiscount1Days,

      CashDiscount1Percent,

      CashDiscount2Days,

      CashDiscount2Percent,

      NetPaymentDays,

      PaymentMethod,

      CndnContrSuplrSettlmtCat,

      CndnContrCustSettlmtCat,

      SettlmtProduct,

      FinalSettlmtCalendar,

      PartialSettlmtCalendar,

      DeltaSettlmtCalendar,

      DeltaAccrualSettlmtCalendar,

      AccrualClearingSettlmtCalendar,

      CndnContrExtensionCalendar,

      PrecedingConditionDocument          as PrecedingConditionContract,

      CndnContrPurposeCat,

      CndnContrSourceDocCat,

      CndnContrSourceDoc,

      CndnContrSourceDocItem,

      BusVolTableGroup,

      AmountFieldGroup,

      CndnContrUnit,

      CndnContrWeightUnit,

      CndnContrVolumeUnit,

      CndnContrPointsQtyUnit,

      AccrualUpdateIsRequired,

      CndnContrUUID,

      CndnContrSourceUUID,

      SettlmtPartTxRegnNmbr,

      TaxCountry,

      SettlmtPartTxRegnCntry,

      CndnContrPrcgDetnRlvnceCat,

      CndnContrWorkerCostCenter,

      CndnContrWorkerSettlmtCat,

      DataController,

      CndnContrSemanticCode,

      CndnContrProcessCategory,

      CndnContrPartnerCat,

      CndnContrSettlmtType,

      /* Associations */
      _CndnContrSettlmtCal,
      _CndnContrBusVolSelCriteria

}
```
