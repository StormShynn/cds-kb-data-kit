---
name: I_JP_INVCSMMRYMONTHLYINVOICE
description: "JP Invcsmmrymonthlyinvoice"
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-JP
  - lob:Finance
---
# I_JP_INVCSMMRYMONTHLYINVOICE

**JP Invcsmmrymonthlyinvoice**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs )` |  |  |
| `InvcSmmryMonthlyInvc` | ✓ | |  | `cast( invsumnr as isjp_minr )` |  |  |
| `InvcSmmryPayer` |  | |  | `cast( invsumpayer as isjp_ispayer )` |  |  |
| `InvcSmmryPayerInvcGrpgUnit` |  | |  | `cast( pigrunit as isjp_pigrunit )` |  |  |
| `Currency` |  | |  | `cast ( waers as waers)` |  |  |
| `InvcSmmryRecipient` |  | |  | `cast( invsumrecip as isjp_recipient )` |  |  |
| `InvcSmmryGroupingUnit` |  | |  | `cast( grunit as isjp_grpunit )` |  |  |
| `InvcSmmryClosingDate` |  | |  | `cast( closdate as isjp_closedate )` |  |  |
| `InvcSmmryDueDate` |  | |  | `cast( netdt as isjp_duedate )` |  |  |
| `InvcSmmryPayerInvc` |  | |  | `cast(pinr as isjp_pinr)` |  |  |
| `InvcSmmryNetAmount` |  | |  | `cast( netamnt as isjp_netamnt )` |  |  |
| `InvcSmmryTaxAmount` |  | |  | `cast( taxamnt as isjp_taxamnt )` |  |  |
| `InvcSmmryAmountPaid` |  | |  | `cast( paidamnt as isjp_amntpaid )` |  |  |
| `InvcSmmryPrevInvoicedAmt` |  | |  | `cast( previnvamnt as isjp_previnvamnt )` |  |  |
| `InvcSmmryCarryForwardAmt` |  | |  | `cast( carfwdamnt as isjp_carfwdamnt )` |  |  |
| `InvcSmmryPrevClosingDate` |  | |  | `cast( prevclosdate as isjp_preclosedate )` |  |  |
| `InvcSmmryPrevDueDate` |  | |  | `cast( prevnetdt as isjp_preduedate )` |  |  |
| `InvcSmmryPrevMonthlyInvoice` |  | |  | `cast( previnvsumnr as isjp_preminr )` |  |  |
| `InvcSmmryNextMonthlyInvoice` |  | |  | `cast( nextinvsumnr as isjp_nextminr )` |  |  |
| `InvcSmmryOpenAmt` |  | |  | `cast( openamnt as isjp_amntopen )` |  |  |
| `InvcSmmryGrossAmount` |  | |  | `cast(netamnt + taxamnt as isjp_grossamnt )as InvcSmmryGrossAmount` |  |  |
| `ClearingDate` |  | |  | `cast( cleardate as fis_augdt )` |  |  |
| `InvcSmmryIsCancelled` |  | |  | `cast( cancelled as isjp_micancelled )` |  |  |
| `NumberOfOpenItems` |  | |  | `cast( nropenitems as farp_number_of_open_items )` |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJPINVCSMMRYMI'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking:#NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//@VDM.private:false
@VDM.viewType:#BASIC
@Metadata.allowExtensions: true
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'InvcSmmryMonthlyInvc'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'JP_InvoiceSummaryPayerInvoice'

@EndUserText.label: 'Monthly Invoice for Japan Invoice Smmry'
define view I_JP_InvcSmmryMonthlyInvoice as select from P_Jp_InvcSmmryHeader
    association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
 {
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key cast( bukrs as fis_bukrs ) as CompanyCode,
    key cast( invsumnr as isjp_minr ) as InvcSmmryMonthlyInvc,
    //key invsumtype,
    cast( invsumpayer as isjp_ispayer ) as InvcSmmryPayer,
    cast( pigrunit as isjp_pigrunit ) as InvcSmmryPayerInvcGrpgUnit,
    cast ( waers as waers) as Currency,
    cast( invsumrecip as isjp_recipient ) as InvcSmmryRecipient,
    cast( grunit as isjp_grpunit ) as InvcSmmryGroupingUnit,
    cast( closdate as isjp_closedate ) as InvcSmmryClosingDate,
    cast( netdt as isjp_duedate ) as InvcSmmryDueDate,
    cast(pinr as isjp_pinr) as InvcSmmryPayerInvc,
    @Semantics.amount.currencyCode:'Currency'
    cast( netamnt as isjp_netamnt ) as InvcSmmryNetAmount,
    @Semantics.amount.currencyCode:'Currency'
    cast( taxamnt as isjp_taxamnt ) as InvcSmmryTaxAmount,
    @Semantics.amount.currencyCode:'Currency'
    cast( paidamnt as isjp_amntpaid ) as InvcSmmryAmountPaid,
    @Semantics.amount.currencyCode:'Currency'
    cast( previnvamnt as isjp_previnvamnt ) as InvcSmmryPrevInvoicedAmt,
    @Semantics.amount.currencyCode:'Currency'
    cast( carfwdamnt as isjp_carfwdamnt ) as InvcSmmryCarryForwardAmt,
    cast( prevclosdate as isjp_preclosedate ) as InvcSmmryPrevClosingDate,
    cast( prevnetdt as isjp_preduedate ) as InvcSmmryPrevDueDate,
    cast( previnvsumnr as isjp_preminr ) as InvcSmmryPrevMonthlyInvoice,
    cast( nextinvsumnr as isjp_nextminr ) as InvcSmmryNextMonthlyInvoice,
    @Semantics.amount.currencyCode:'Currency'
    cast( openamnt as isjp_amntopen ) as InvcSmmryOpenAmt,
    @Semantics.amount.currencyCode:'Currency'
    cast(netamnt + taxamnt as isjp_grossamnt )as InvcSmmryGrossAmount,  
    cast( cleardate as fis_augdt ) as ClearingDate,
    @Semantics.booleanIndicator: true
    cast( cancelled as isjp_micancelled ) as InvcSmmryIsCancelled,
    
    //creauser,
    //creadate,
    //creatime,
    //chanuser,
    //chandate,
    //chantime,
    cast( nropenitems as farp_number_of_open_items ) as NumberOfOpenItems,
   // cast( banks as ISJP_BANKS ) as InvcSmmryBankCountry,
   // cast( bankl as ISJP_BANKL ) as InvcSmmryBank,
   // cast( virtacctnr as ISJP_VIRTACCTNR ) as InvcSmmryVirtualAcctNo
   _CompanyCode
}where invsumtype = 'M';
```
