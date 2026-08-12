---
name: C_CONDITIONCONTRACTDEX
description: "This CDS view is used for data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for condition contracts. Providing all relevant information for condition contracts, this CDS view allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which condition contracts are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDEX')/$value
semantic_en: "This CDS view is used for data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for condition contracts. Providing all relevant information for condition contracts, this CDS view allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which condition contracts are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Condition Contract Extraction — CDS view tiêu dùng dựa trên R_ConditionContractDEX."
keywords:
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
  - bo:companycode
  - component:LO-GT-CHB
  - consumption-view
  - contract
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# C_CONDITIONCONTRACTDEX

**This CDS view is used for data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for condition contracts. Providing all relevant information for condition contracts, this CDS view allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which condition contracts are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDEX')/$value) |

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
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Worker as Partner of a Condition Contract |
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
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `SettlmtPartTxRegnCntry` |  | |  |  | `CHAR(3)` | Partner Tax Country/Region |
| `SettlmtPartTxRegnNmbr` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `BasicConditionContract` |  | |  |  | `CHAR(10)` | Basic Contract of Contract |
| `CndnContrWorkerCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
| `CndnContrSemanticCode` |  | |  |  | `NUMC(4)` | Semantic Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONDITIONCONTRACTDEX')/$value)*

```abap
@EndUserText.label: 'Condition Contract Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
    sapObjectNodeType.name: 'ConditionContract',
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
                          viewElement: ['ConditionContract'],
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

define view entity C_ConditionContractDEX
  as select from R_ConditionContractDEX as ConditionContractDEX
{
  key ConditionContract,
      ConditionContractDEX.CndnContrType,
      ConditionContractDEX.CndnContrClassfctnType,
      ConditionContractDEX.CndnContrProcVar,
      ConditionContractDEX.DocumentReferenceID,
      ConditionContractDEX.CndnContrAssgmtRef,
      ConditionContractDEX.ExternalDocumentReferenceID,
      ConditionContractDEX.CndnContrExternalPartner,
      ConditionContractDEX.CndnContrActvtnStatus,
      ConditionContractDEX.CndnContrValidFrom,
      ConditionContractDEX.CndnContrValidTo,
      ConditionContractDEX.Supplier,
      ConditionContractDEX.Customer,
      ConditionContractDEX.PriorSupplier,
      ConditionContractDEX.PersonWorkAgreement,
      ConditionContractDEX.CompanyCode,
      ConditionContractDEX.PurchasingOrganization,
      ConditionContractDEX.PurchasingGroup,
      ConditionContractDEX.SalesOrganization,
      ConditionContractDEX.DistributionChannel,
      ConditionContractDEX.Division,
      ConditionContractDEX.SalesGroup,
      ConditionContractDEX.SalesOffice,
      ConditionContractDEX.CreatedByUser,
      ConditionContractDEX.CreationDate,
      ConditionContractDEX.CreationTime,
      ConditionContractDEX.CreationTimeZone,
      ConditionContractDEX.CreationUTCDateTime,
      ConditionContractDEX.LastChangedByUser,
      ConditionContractDEX.LastChangedDate,
      ConditionContractDEX.LastChangeTime,
      ConditionContractDEX.LastChangeUTCDateTime,
      ConditionContractDEX.CndnContrCurrency,
      ConditionContractDEX.ExchangeRate,
      ConditionContractDEX.ExchangeRateType,
      ConditionContractDEX.ExchangeRateDate,
      ConditionContractDEX.PaymentTerms,
      ConditionContractDEX.CashDiscount1Days,
      ConditionContractDEX.CashDiscount1Percent,
      ConditionContractDEX.CashDiscount2Days,
      ConditionContractDEX.CashDiscount2Percent,
      ConditionContractDEX.NetPaymentDays,
      ConditionContractDEX.PaymentMethod,
      ConditionContractDEX.CndnContrSuplrSettlmtCat,
      ConditionContractDEX.CndnContrCustSettlmtCat,
      ConditionContractDEX.SettlmtProduct,
      ConditionContractDEX.FinalSettlmtCalendar,
      ConditionContractDEX.PartialSettlmtCalendar,
      ConditionContractDEX.DeltaSettlmtCalendar,
      ConditionContractDEX.DeltaAccrualSettlmtCalendar,
      ConditionContractDEX.AccrualClearingSettlmtCalendar,
      ConditionContractDEX.CndnContrExtensionCalendar,
      ConditionContractDEX.PrecedingConditionDocument as PrecedingConditionContract,
      ConditionContractDEX.CndnContrPurposeCat,
      ConditionContractDEX.CndnContrSourceDocCat,
      ConditionContractDEX.CndnContrSourceDoc,
      ConditionContractDEX.CndnContrSourceDocItem,
      ConditionContractDEX.BusVolTableGroup,
      ConditionContractDEX.AmountFieldGroup,
      ConditionContractDEX.CndnContrUnit,
      ConditionContractDEX.CndnContrWeightUnit,
      ConditionContractDEX.CndnContrVolumeUnit,
      ConditionContractDEX.CndnContrPointsQtyUnit,
      ConditionContractDEX.AccrualUpdateIsRequired,
      ConditionContractDEX.TaxCountry,
      ConditionContractDEX.SettlmtPartTxRegnCntry,
      ConditionContractDEX.SettlmtPartTxRegnNmbr,
      ConditionContractDEX.BasicConditionContract,
      ConditionContractDEX.CndnContrWorkerCostCenter,
      ConditionContractDEX.CndnContrSemanticCode,

      /* Associations */
      @Consumption.hidden: true
      ConditionContractDEX._Customer,
      @Consumption.hidden: true
      ConditionContractDEX._Supplier,
      @Consumption.hidden: true
      ConditionContractDEX._PriorSupplier,
      @Consumption.hidden: true
      ConditionContractDEX._PersonWorkAgreement
}
```
