---
name: I_FTR_FACILITY_VH
description: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value
semantic_en: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Facilities — CDS view giao diện dựa trên vtbfha."
keywords:
  - "facilities"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "instr"
  - "product"
  - "category"
  - "treasury"
  - "master"
  - "agreement"
  - "instrument"
  - "status"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FTR_FACILITY_VH

**This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of a facility transaction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  | `rfha` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrProductCategory` |  | |  | `cast(FinancialTransaction.sanlf as ftr_gen_fin_instr_prod_categ)` | `NUMC(3)` | Financial Instrument Product Category |
| `TreasuryMasterAgreement` |  | |  | `rmaid` | `CHAR(10)` | Master Agreement |
| `FinancialInstrumentStatus` |  | |  | `saktiv` | `NUMC(1)` | Active Status of Transaction or Activity |
| `Counterparty` |  | |  | `cast(FinancialTransaction.kontrh as rkontrah_new)` | `CHAR(10)` | Counterparty Number |
| `TransactionCurrency` |  | |  | `wgschft` | `CUKY(5)` | Transaction Currency |
| `TreasuryFinanceProject` |  | |  | `zuonr` | `CHAR(13)` | Finance Project |
| `TreasuryFacility` |  | |  | `facilitynr` | `CHAR(13)` | Transaction Number of Facility |
| `TreasuryFacilityCompanyCode` |  | |  | `facilitybukrs` | `CHAR(4)` | Company Code of Facility |
| `FinancialInstrumentAssignment` |  | |  | `cast(FinancialTransaction.zuond as ftr_gen_fin_instr_assignment)` | `CHAR(18)` | Free Assignment of Financial Transaction |
| `FinancialInstrumentReference` |  | |  | `cast(FinancialTransaction.refer as ftr_gen_fin_instr_internal_ref)` | `CHAR(16)` | Free Internal Reference of Financial Transaction |
| `FinancialInstrCharacteristic` |  | |  | `cast(FinancialTransaction.merkm as ftr_gen_fin_instr_char)` | `CHAR(25)` | Free Characteristic of Financial Transaction |
| `Portfolio` |  | |  | `rportb` | `CHAR(10)` | Portfolio |
| `FinancialInstrTransactionType` |  | |  | `cast(FinancialTransaction.sfhaart as ftr_gen_transaction_type)` | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinancialInstrumentProductType` |  | |  | `sgsart` | `CHAR(3)` | Product Type |
| `CreatedByUser` |  | |  | `cruser` | `CHAR(12)` | Entered By |
| `BusinessArea` |  | |  | `rbusa` | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  | `rcntr` | `CHAR(10)` | Cost Center |
| `TermStartDate` |  | |  | `dblfz` | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  | `delfz` | `DATS(8)` | Term End |
| `HedgingClassification` |  | |  | `hedge_class` | `CHAR(5)` | Hedging Classification |
| `FinInstrumentIncomingCurrency` |  | |  | `wgschft2` | `CUKY(5)` | Currency of Incoming Side |
| `FinInstrumentOutgoingCurrency` |  | |  | `wgschft1` | `CUKY(5)` | Currency of Outgoing Side |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  | `cast( FinancialTransaction.ps_posid as ps_s4_pspnr )` | `NUMC(8)` | WBS Element |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FACILITY_VH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFTRFACILITYVH'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@EndUserText.label: 'Facilities'
@ObjectModel.representativeKey: 'FinancialTransaction'
@Analytics.dataCategory:#DIMENSION
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_Ftr_Facility_Vh
  as select from vtbfha as FinancialTransaction
  association [1..1] to I_CompanyCode as _CompanyCode on _CompanyCode.CompanyCode = $projection.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key FinancialTransaction.bukrs                                            as CompanyCode,
  key FinancialTransaction.rfha                                             as FinancialTransaction,
      cast(FinancialTransaction.sanlf as ftr_gen_fin_instr_prod_categ)      as FinancialInstrProductCategory,
      FinancialTransaction.rmaid                                            as TreasuryMasterAgreement,
      FinancialTransaction.saktiv                                           as FinancialInstrumentStatus,
      cast(FinancialTransaction.kontrh   as rkontrah_new)                   as Counterparty,
      FinancialTransaction.wgschft                                          as TransactionCurrency,
      FinancialTransaction.zuonr                                            as TreasuryFinanceProject,
      FinancialTransaction.facilitynr                                       as TreasuryFacility,
      FinancialTransaction.facilitybukrs                                    as TreasuryFacilityCompanyCode,
      cast(FinancialTransaction.zuond    as ftr_gen_fin_instr_assignment)   as FinancialInstrumentAssignment,
      cast(FinancialTransaction.refer    as ftr_gen_fin_instr_internal_ref) as FinancialInstrumentReference,
      cast(FinancialTransaction.merkm    as ftr_gen_fin_instr_char)         as FinancialInstrCharacteristic,
      FinancialTransaction.rportb                                           as Portfolio,
      cast(FinancialTransaction.sfhaart as ftr_gen_transaction_type)        as FinancialInstrTransactionType,
      FinancialTransaction.sgsart                                           as FinancialInstrumentProductType,
      FinancialTransaction.cruser                                           as CreatedByUser,
      //Additional table fields for TPM12
      FinancialTransaction.rbusa                                            as BusinessArea,
      FinancialTransaction.rcntr                                            as CostCenter,
      FinancialTransaction.dblfz                                            as TermStartDate,
      FinancialTransaction.delfz                                            as TermEndDate,
      FinancialTransaction.hedge_class                                      as HedgingClassification,
      FinancialTransaction.wgschft2                                         as FinInstrumentIncomingCurrency,
      FinancialTransaction.wgschft1                                         as FinInstrumentOutgoingCurrency,
      FinancialTransaction.prctr                                            as ProfitCenter,
      cast( FinancialTransaction.ps_posid as ps_s4_pspnr )                  as WBSElementInternalID,
      _CompanyCode
}
where
  FinancialTransaction.sanlf = '560'
```
