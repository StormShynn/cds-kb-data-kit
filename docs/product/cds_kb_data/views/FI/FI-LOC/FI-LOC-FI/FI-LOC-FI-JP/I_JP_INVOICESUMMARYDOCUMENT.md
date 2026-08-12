---
name: I_JP_INVOICESUMMARYDOCUMENT
description: "JP Invoicesummarydocument"
app_component: FI-LOC-FI-JP
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
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - document
  - component:FI-LOC-FI-JP
  - lob:Finance
---
# I_JP_INVOICESUMMARYDOCUMENT

**JP Invoicesummarydocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `InvoiceSummaryNumber` | ✓ | |  | `invsumnr` |  |  |
| `InvcSmmryType` | ✓ | |  | `invsumtype` |  |  |
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
| `InvcSmmryTotBlldAmtInTransCrcy` |  | |  | `cast( netamnt + taxamnt + previnvamnt - paidamnt as isjptotalbilledamnt )` |  |  |
| `NumberOfOpenItems` |  | |  | `cast( nropenitems as farp_number_of_open_items )` |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Invoice Summary Document'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking:#NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@VDM.viewType:#BASIC
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern: #DATA_STRUCTURE

@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #DATA_STRUCTURE,
                                     #OUTPUT_EMAIL_DATA_PROVIDER,
                                     #SQL_DATA_SOURCE]


define view entity I_JP_InvoiceSummaryDocument as select from P_Jp_InvcSmmryHeader
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
   
   @ObjectModel.foreignKey.association: '_CompanyCode'
    key bukrs as CompanyCode,
    key invsumnr as InvoiceSummaryNumber,
    key invsumtype as InvcSmmryType,
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
    
    @Semantics.amount.currencyCode: 'Currency'
    cast( netamnt + taxamnt + previnvamnt - paidamnt as isjptotalbilledamnt ) as InvcSmmryTotBlldAmtInTransCrcy,
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
}
```
