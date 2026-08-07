---
name: I_HR_FISCALDOCUMENT
description: HR Fiscaldocument
app_component: FI-LOC-LO-HR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-HR
  - lob:Finance
---
# I_HR_FISCALDOCUMENT

**HR Fiscaldocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-HR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `BusinessSpaceCode` | ✓ | |  | `bus_space_code` |
| `ChargingDeviceCode` | ✓ | |  | `chg_dev_code` |
| `FiscalDocument` | ✓ | |  | `fisc_document` |
| `PostingFiscalYear` | ✓ | |  | `fiscal_year` |
| `HR_FiscalDocumentType` | ✓ | |  | `appli` |
| `PostingDate` |  | |  | `budat` |
| `HR_CompanyOIB` |  | |  | `comp_oib` |
| `FiscalPaymentMethod` |  | |  | `fisc_pay_meth` |
| `HR_FiscalInvoiceStatus` |  | |  | `status` |
| `RecordCreatedDate` |  | |  | `erdat` |
| `ObjectCreatedByUser` |  | |  | `ernam` |
| `InvoiceIssueTime` |  | |  | `erzet` |
| `HR_UserOIB` |  | |  | `usr_oib` |
| `DocumentReferenceID` |  | |  | `fisc_number` |
| `SuplrBillgDocTotalGrossAmount` |  | |  | `amount` |
| `SalesDocumentCurrency` |  | |  | `fisck` |
| `DeliveryIsChanged` |  | |  | `later_del` |
| `HR_InvoiceIsParagonInvoice` |  | |  | `paragon_inv` |
| `HR_ParagonInvoice` |  | |  | `paragon_num` |
| `IssuerProtectionCode` |  | |  | `prot_code` |
| `InvoiceUniqueIdentifier` |  | |  | `jir` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label:'Fiscal documents'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ 
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
                                    
@Analytics.dataExtraction.enabled   
@ObjectModel.sapObjectNodeType.name:'BillingDocument'                              
define view entity I_HR_FiscalDocument
  as select from /ccee/fisc_croa
{
  key bukrs          as CompanyCode,
  key bus_space_code as BusinessSpaceCode,      
  key chg_dev_code   as ChargingDeviceCode,
  key fisc_document  as FiscalDocument,
  key fiscal_year    as PostingFiscalYear,
  key appli          as HR_FiscalDocumentType,
      budat          as PostingDate,
      comp_oib       as HR_CompanyOIB,
      fisc_pay_meth  as FiscalPaymentMethod,
      status         as HR_FiscalInvoiceStatus,
      erdat          as RecordCreatedDate,
      ernam          as ObjectCreatedByUser,
      erzet          as InvoiceIssueTime,
      usr_oib        as HR_UserOIB,
      fisc_number    as DocumentReferenceID,
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      amount         as SuplrBillgDocTotalGrossAmount,
      fisck          as SalesDocumentCurrency,
      @Semantics.booleanIndicator: true 
      later_del      as DeliveryIsChanged,
      paragon_inv    as HR_InvoiceIsParagonInvoice,
      paragon_num    as HR_ParagonInvoice,
      prot_code      as IssuerProtectionCode,
      jir            as InvoiceUniqueIdentifier
}
```
