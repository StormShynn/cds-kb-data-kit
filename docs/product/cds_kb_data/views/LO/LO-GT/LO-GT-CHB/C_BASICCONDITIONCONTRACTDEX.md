---
name: C_BASICCONDITIONCONTRACTDEX
description: "Basic Condition Contract Extraction"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BASICCONDITIONCONTRACTDEX')/$value
semantic_en: "Basic Condition Contract Extraction"
semantic_vi: "Basic Condition Contract Extraction — CDS view tiêu dùng dựa trên R_BasicConditionContractDEX."
keywords:
  - "basic"
  - "condition"
  - "contract"
  - "extraction"
  - "cndn"
  - "contr"
  - "type"
  - "classfctn"
  - "proc"
  - "document"
  - "reference"
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - contract
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# C_BASICCONDITIONCONTRACTDEX

**Basic Condition Contract Extraction**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BASICCONDITIONCONTRACTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BasicConditionContract` | ✓ | |  |  | `CHAR(10)` | Basic Contract of Contract |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `CndnContrClassfctnType` |  | |  |  | `CHAR(2)` | Condition Contract Category |
| `CndnContrProcVar` |  | |  |  | `CHAR(4)` | Condition Contract Process Variant |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Condition Contract: Reference |
| `BscCndnContrAssgmtReference` |  | |  |  | `CHAR(16)` | Condition Contract: Assignment |
| `ExternalDocumentReferenceID` |  | |  |  | `CHAR(30)` | External Document Identifier |
| `BscCndnContrExternalPartner` |  | |  |  | `CHAR(10)` | Condition Contract: External Partner |
| `BscCndnContrActivationStatus` |  | |  |  | `CHAR(1)` | Condition Contract Activation Status |
| `BscCndnContrValidFromDate` |  | |  |  | `DATS(8)` | Valid From |
| `BscCndnContrValidToDate` |  | |  |  | `DATS(8)` | Valid To |
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
| `BscConditionContractCurrency` |  | |  |  | `CUKY(5)` | Currency of Basic Condition Contract |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate (no Conversion) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Conversion Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | First Payment in Days |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Discount for First Payment in % |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Second Payment in Days |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Discount for Second Payment in % |
| `NetPaymentDays` |  | |  |  | `DEC(3)` | Cash Discount Days |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `BscCndnContrSuplrSettlmtCat` |  | |  |  | `CHAR(1)` | Supplier Settlement Category |
| `BscCndnContrCustSettlmtCat` |  | |  |  | `CHAR(1)` | Customer Settlement Category |
| `SettlmtProduct` |  | |  |  | `CHAR(40)` | Settlement Product |
| `FinalSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Final Settlement |
| `PartialSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Partial Settlement |
| `DeltaSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Delta Settlement |
| `DeltaAccrualSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Delta Accruals Settlement |
| `AccrualClearingSettlmtCalendar` |  | |  |  | `CHAR(2)` | Calendar for Accruals Deferral Settlement |
| `CndnContrExtensionCalendar` |  | |  |  | `CHAR(2)` | Calendar for Condition Contract Extension |
| `PrecdgBasicConditionContract` |  | |  | `PrecedingConditionDocument` | `CHAR(10)` | Predecessor Condition Contract |
| `BscCndnContrPurposeCategory` |  | |  |  | `CHAR(2)` | Condition Contract Purpose Category |
| `BscCndnContrSrceDocCategory` |  | |  |  | `CHAR(2)` | External Reference Document Category |
| `BscCndnContrSourceDocument` |  | |  |  | `CHAR(32)` | External Reference |
| `BscCndnContrSourceDocumentItem` |  | |  |  | `NUMC(10)` | External Reference Item |
| `BusVolTableGroup` |  | |  |  | `CHAR(4)` | Business Volume Table Group |
| `AmountFieldGroup` |  | |  |  | `CHAR(4)` | Amount Fields Group |
| `BasicConditionContractUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Measure |
| `BscCndnContrWeightUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Weight |
| `BscCndnContrVolumeUnit` |  | |  |  | `UNIT(3)` | Settlement Unit of Volume |
| `BscCndnContrPtsQuantityUnit` |  | |  |  | `UNIT(3)` | Settlement Points Unit |
| `AccrualUpdateIsRequired` |  | |  |  | `CHAR(1)` | Accruals Update Required |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `SettlmtPartTxRegnCntry` |  | |  |  | `CHAR(3)` | Partner Tax Country/Region |
| `SettlmtPartTxRegnNmbr` |  | |  |  | `CHAR(20)` | VAT Registration Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BASICCONDITIONCONTRACTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BASICCONDITIONCONTRACTDEX')/$value)*

```abap
@EndUserText.label: 'Basic Condition Contract Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
    sapObjectNodeType.name: 'BasicConditionContract',
    usageType: {
       dataClass:      #MIXED,
       serviceQuality: #D,
       sizeCategory:   #XXL 
       } 
    }
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta: {
            changeDataCapture: {
                mapping:[
                    {
                        table: 'wcocoh', role: #MAIN,
                        viewElement: ['BasicConditionContract'],
                        tableElement: ['num']
                    }
                    ]
               }
            }
        }
    }
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }
define view entity C_BasicConditionContractDEX
  as select from R_BasicConditionContractDEX as BasicConditionContract
{
  key BasicConditionContract.BasicConditionContract,
      BasicConditionContract.CndnContrType,
      BasicConditionContract.CndnContrClassfctnType,
      BasicConditionContract.CndnContrProcVar,
      BasicConditionContract.DocumentReferenceID,
      BasicConditionContract.BscCndnContrAssgmtReference,
      BasicConditionContract.ExternalDocumentReferenceID,
      BasicConditionContract.BscCndnContrExternalPartner,
      BasicConditionContract.BscCndnContrActivationStatus,

      /* Validity */
      BasicConditionContract.BscCndnContrValidFromDate,
      BasicConditionContract.BscCndnContrValidToDate,

      /* Partners */
      BasicConditionContract.Supplier,
      BasicConditionContract.Customer,
      BasicConditionContract.PriorSupplier,

      /* Organizational Data */
      BasicConditionContract.CompanyCode,
      BasicConditionContract.PurchasingOrganization,
      BasicConditionContract.PurchasingGroup,
      BasicConditionContract.SalesOrganization,
      BasicConditionContract.DistributionChannel,
      BasicConditionContract.Division,
      BasicConditionContract.SalesGroup,
      BasicConditionContract.SalesOffice,

      /* Administrative Data */
      BasicConditionContract.CreatedByUser,
      BasicConditionContract.CreationDate,
      BasicConditionContract.CreationTime,
      BasicConditionContract.CreationTimeZone,
      BasicConditionContract.CreationUTCDateTime,
      BasicConditionContract.LastChangedByUser,
      BasicConditionContract.LastChangedDate,
      BasicConditionContract.LastChangeTime,
      BasicConditionContract.LastChangeUTCDateTime,

      /* Currency and Exchange Rate */
      BasicConditionContract.BscConditionContractCurrency,
      BasicConditionContract.ExchangeRate,
      BasicConditionContract.ExchangeRateType,
      BasicConditionContract.ExchangeRateDate,

      /* Payment terms and method */
      BasicConditionContract.PaymentTerms,
      BasicConditionContract.CashDiscount1Days,
      BasicConditionContract.CashDiscount1Percent,
      BasicConditionContract.CashDiscount2Days,
      BasicConditionContract.CashDiscount2Percent,
      BasicConditionContract.NetPaymentDays,
      BasicConditionContract.PaymentMethod,
      BasicConditionContract.BscCndnContrSuplrSettlmtCat,
      BasicConditionContract.BscCndnContrCustSettlmtCat,
      BasicConditionContract.SettlmtProduct,

      /* Calendars */
      BasicConditionContract.FinalSettlmtCalendar,
      BasicConditionContract.PartialSettlmtCalendar,
      BasicConditionContract.DeltaSettlmtCalendar,
      BasicConditionContract.DeltaAccrualSettlmtCalendar,
      BasicConditionContract.AccrualClearingSettlmtCalendar,
      BasicConditionContract.CndnContrExtensionCalendar,
      BasicConditionContract.PrecedingConditionDocument as PrecdgBasicConditionContract,
      BasicConditionContract.BscCndnContrPurposeCategory,

      /* Source Document */
      BasicConditionContract.BscCndnContrSrceDocCategory,
      BasicConditionContract.BscCndnContrSourceDocument,
      BasicConditionContract.BscCndnContrSourceDocumentItem,


      BasicConditionContract.BusVolTableGroup,
      BasicConditionContract.AmountFieldGroup,

      /* Units */
      BasicConditionContract.BasicConditionContractUnit,
      BasicConditionContract.BscCndnContrWeightUnit,
      BasicConditionContract.BscCndnContrVolumeUnit,
      BasicConditionContract.BscCndnContrPtsQuantityUnit,


      BasicConditionContract.AccrualUpdateIsRequired,

      /* Tax */
      BasicConditionContract.TaxCountry,
      BasicConditionContract.SettlmtPartTxRegnCntry,

      /* VAT Registration */
      BasicConditionContract.SettlmtPartTxRegnNmbr,

      /* Associations*/
      @Consumption.hidden: true
      BasicConditionContract._Customer,
      @Consumption.hidden: true
      BasicConditionContract._PriorSupplier,
      @Consumption.hidden: true
      BasicConditionContract._Supplier
}
```
