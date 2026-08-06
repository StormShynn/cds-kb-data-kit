---
name: I_BR_ONETIMEPARTNER
description: BR Onetimepartner
app_component: FI-LOC-LO-BR
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
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ONETIMEPARTNER

**BR Onetimepartner**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BR_NotaFiscal` | `OneTimePartner.docnum` |
| key `BR_PartnerFunction` | `OneTimePartner.parvw` |
| `BusinessPartnerName1` | `OneTimePartner.name1` |
| `BusinessPartnerName2` | `OneTimePartner.name2` |
| `BR_PartnerCNPJ` | `OneTimePartner.stcd1` |
| `BR_PartnerCPF` | `OneTimePartner.stcd2` |
| `BR_PartnerStateTaxNumberST` | `OneTimePartner.j_1bstains` |
| `BusinessPartnerTaxJurisdiction` | `OneTimePartner.taxjurcode` |
| `BusinessPartnerStreetNameOnly` | `OneTimePartner.street` |
| `BusinessPartnerStreetName` | `OneTimePartner.stras` |
| `BusinessPartnerHouseNumber` | `OneTimePartner.house_num1` |
| `BPHsNmbrSuplmntTxt` | `OneTimePartner.house_num2` |
| `BusinessPartnerDistrict` | `OneTimePartner.city2` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRONETIMEPART'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal One Time Partner'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_OneTimePartner as select from j_1bnfcpd as OneTimePartner {
  key OneTimePartner.docnum     as BR_NotaFiscal,
  key OneTimePartner.parvw      as BR_PartnerFunction,
      OneTimePartner.name1      as BusinessPartnerName1,
      OneTimePartner.name2      as BusinessPartnerName2,
      OneTimePartner.stcd1      as BR_PartnerCNPJ,
      OneTimePartner.stcd2      as BR_PartnerCPF,
      OneTimePartner.j_1bstains as BR_PartnerStateTaxNumberST,
      OneTimePartner.taxjurcode as BusinessPartnerTaxJurisdiction,
      OneTimePartner.street     as BusinessPartnerStreetNameOnly,
      OneTimePartner.stras      as BusinessPartnerStreetName,
      OneTimePartner.house_num1 as BusinessPartnerHouseNumber,
      OneTimePartner.house_num2 as BPHsNmbrSuplmntTxt,
      OneTimePartner.city2      as BusinessPartnerDistrict
}
```
