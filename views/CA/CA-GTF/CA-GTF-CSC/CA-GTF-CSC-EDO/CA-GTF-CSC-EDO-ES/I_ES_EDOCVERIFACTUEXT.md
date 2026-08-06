---
name: I_ES_EDOCVERIFACTUEXT
description: ES Edocverifactuext
app_component: CA-GTF-CSC-EDO-ES
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-ES
  - lob:Cross-Application Components
---
# I_ES_EDOCVERIFACTUEXT

**ES Edocverifactuext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-ES` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `SDOC.ElectronicDocUUID` |
| `ElectronicDocSequenceNmbr` | `SDOC.ElectronicDocSequenceNmbr` |
| `ES_EDocVeriFactuPreIssuerTaxId` | `SDOC.ES_EDocVeriFactuPreIssuerTaxId` |
| `ES_EDocVeriFactuPreIssuerNmbr` | `SDOC.ES_EDocVeriFactuPreIssuerNmbr` |
| `ES_EDocVeriFactuPreIssueInDate` | `SDOC.ES_EDocVeriFactuPreIssueInDate` |
| `ES_EDocVeriFactuIssuerTaxId` | `SDOC.ES_EDocVeriFactuIssuerTaxId` |
| `ES_EDocVeriFactuIssuerInvcNmbr` | `SDOC.ES_EDocVeriFactuIssuerInvcNmbr` |
| `ES_EDocVeriFactuIssueInDate` | `SDOC.ES_EDocVeriFactuIssueInDate` |
| `ES_EDocVeriFactuTotalAmount` | `SDOC.ES_EDocVeriFactuTotalAmount` |
| `ES_EDocVeriFactuTaxAmount` | `SDOC.ES_EDocVeriFactuTaxAmount` |
| `ES_EDocVeriFactuInvcType` | `SDOC.ES_EDocVeriFactuInvcType` |
| `ES_EDocVeriFactuSrceDocType` | `SDOC.ES_EDocVeriFactuSrceDocType` |
| `ES_EDocVeriFactuReversal` | `SDOC.ES_EDocVeriFactuReversal` |
| `ES_EDocVeriFactuNmbrRange` | `SDOC.ES_EDocVeriFactuNmbrRange` |
| `ES_EDocVeriFactuInvcRecdNmbr` | `SDOC.ES_EDocVeriFactuInvcRecdNmbr` |
| `ES_EDocVeriFactuPreInvcRecd` | `SDOC.ES_EDocVeriFactuPreInvcRecd` |
| `ES_EDocVeriFactuHashTxt` | `SDOC.ES_EDocVeriFactuHashTxt` |
| `ES_EDocVeriFactuPrevHashTxt` | `SDOC.ES_EDocVeriFactuPrevHashTxt` |
| `ES_EDocVeriFactuDocDteTme` | `SDOC.ES_EDocVeriFactuDocDteTme` |
| `ES_EDocVeriFactuErrorCode` | `SDOC.ES_EDocVeriFactuErrorCode` |
| `ES_EDocVeriFactuErrorDesc` | `SDOC.ES_EDocVeriFactuErrorDesc` |
| `ElectronicDocCreationDate` | `EDOC.ElectronicDocCreationDate` |
| `ElectronicDocCreationTime` | `EDOC.ElectronicDocCreationTime` |
| `ElectronicDocCompanyCode` | `EDOC.ElectronicDocCompanyCode` |
| `ElectronicDocSourceType` | `EDOC.ElectronicDocSourceType` |
| `ElectronicDocSourceKey` | `EDOC.ElectronicDocSourceKey` |
| `Currency` | `SDOC.Currency` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'VeriFactu Electronic documents'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE ]
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_ES_EDocVeriFactuExt as select from R_ES_EDocVeriFactuSingleDoc as SDOC
inner join I_ElectronicDoc as EDOC on  SDOC.ElectronicDocUUID = EDOC.ElectronicDocUUID
{
  key SDOC.ElectronicDocUUID,
  SDOC.ElectronicDocSequenceNmbr,
  SDOC.ES_EDocVeriFactuPreIssuerTaxId,
  SDOC.ES_EDocVeriFactuPreIssuerNmbr,
  SDOC.ES_EDocVeriFactuPreIssueInDate,
  SDOC.ES_EDocVeriFactuIssuerTaxId,
  SDOC.ES_EDocVeriFactuIssuerInvcNmbr,
  SDOC.ES_EDocVeriFactuIssueInDate,
  @Semantics.amount.currencyCode: 'Currency'
  SDOC.ES_EDocVeriFactuTotalAmount,
  @Semantics.amount.currencyCode: 'Currency'
  SDOC.ES_EDocVeriFactuTaxAmount,
  SDOC.ES_EDocVeriFactuInvcType,
  SDOC.ES_EDocVeriFactuSrceDocType,
  SDOC.ES_EDocVeriFactuReversal,
  SDOC.ES_EDocVeriFactuNmbrRange,
  SDOC.ES_EDocVeriFactuInvcRecdNmbr,
  SDOC.ES_EDocVeriFactuPreInvcRecd,
  SDOC.ES_EDocVeriFactuHashTxt,
  SDOC.ES_EDocVeriFactuPrevHashTxt,
  SDOC.ES_EDocVeriFactuDocDteTme,
  SDOC.ES_EDocVeriFactuErrorCode,
  SDOC.ES_EDocVeriFactuErrorDesc,
  EDOC.ElectronicDocCreationDate,
  EDOC.ElectronicDocCreationTime,
  EDOC.ElectronicDocCompanyCode,
  EDOC.ElectronicDocSourceType,
  EDOC.ElectronicDocSourceKey,
  SDOC.Currency
  
  }
```
