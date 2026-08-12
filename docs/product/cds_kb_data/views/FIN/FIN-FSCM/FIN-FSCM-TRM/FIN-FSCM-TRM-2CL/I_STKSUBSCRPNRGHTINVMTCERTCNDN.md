---
name: I_STKSUBSCRPNRGHTINVMTCERTCNDN
description: "Stksubscrpnrghtinvmtcertcndn"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_STKSUBSCRPNRGHTINVMTCERTCNDN

**Stksubscrpnrghtinvmtcertcndn**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClass` | ✓ | |  | `cast(ranl as ftr_gen_security_class preserving type)` |  |  |
| `StockPartlyPaytEffctvFromDate` | ✓ | |  | `dguel_kk` |  |  |
| `ScrtyClDvdndEntlmntStartDate` |  | |  | `ddbab` |  |  |
| `ScrtyClDistrIsReinvested` |  | |  | `cast( case when StkSubscrpnRghtInvmtCertCndn.jthesau = '1' then 'X' else '' end as ftr_sc_sthes preserving type )` |  |  |
| `DistrReinvestmentDiscInPct` |  | |  | `pwanlrab` |  |  |
| `StockPartlyPayInRateInPercent` |  | |  | `kzahlakt` |  |  |
| `StockPartlyPaymentAmount` |  | |  | `cast(StkSubscrpnRghtInvmtCertCndn.bzahlakt as ftr_sc_bzahlakt)` |  |  |
| `StockPartlyPaymentDate` |  | |  | `drest` |  |  |
| `IssueCurrency` |  | | `_SecurityClassBasic` | `IssueCurrency` |  |  |
| `FinancialInstrProductCategory` |  | | `_SecurityClassBasic` | `FinancialInstrProductCategory` |  |  |
| `_SecurityClassBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClassBasic` | `I_SecurityClassBasic` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Stock SubscrpnRght InvmtCert Condition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#SEARCHABLE_ENTITY,#SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
define view entity I_StkSubscrpnRghtInvmtCertCndn
  as select from vzskoko as StkSubscrpnRghtInvmtCertCndn

  association [1..1] to I_SecurityClassBasic as _SecurityClassBasic on $projection.SecurityClass = _SecurityClassBasic.SecurityClass
{
  key cast(ranl as ftr_gen_security_class preserving type)           as SecurityClass,  
  key StkSubscrpnRghtInvmtCertCndn.dguel_kk                          as StockPartlyPaytEffctvFromDate,

      StkSubscrpnRghtInvmtCertCndn.ddbab                             as ScrtyClDvdndEntlmntStartDate,
      @Semantics.booleanIndicator
      cast( case
        when StkSubscrpnRghtInvmtCertCndn.jthesau = '1' then 'X'
        else ''
      end as ftr_sc_sthes preserving type )                          as ScrtyClDistrIsReinvested,
      StkSubscrpnRghtInvmtCertCndn.pwanlrab                          as DistrReinvestmentDiscInPct,

      StkSubscrpnRghtInvmtCertCndn.kzahlakt                          as StockPartlyPayInRateInPercent,
      @Semantics.amount.currencyCode: 'IssueCurrency'
      cast(StkSubscrpnRghtInvmtCertCndn.bzahlakt as ftr_sc_bzahlakt) as StockPartlyPaymentAmount,
      StkSubscrpnRghtInvmtCertCndn.drest                             as StockPartlyPaymentDate,

      _SecurityClassBasic.IssueCurrency                              as IssueCurrency,
      _SecurityClassBasic.FinancialInstrProductCategory              as FinancialInstrProductCategory,

      _SecurityClassBasic
}
```
