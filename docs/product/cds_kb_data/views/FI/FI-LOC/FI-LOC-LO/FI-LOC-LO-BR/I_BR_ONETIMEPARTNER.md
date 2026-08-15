---
name: I_BR_ONETIMEPARTNER
description: "BR Onetimepartner"
semantic_vi: "View BR Onetimepartner hiển thị dữ liệu đối tác Brazil một lần, thường được sử dụng khi tương tác với đối tác kinh doanh cho một ghi chú tài chính cụ thể."
keywords:
  - "br onetimepartner"
  - "brazilian onetime partner"
  - "fiscal note"
  - "ghi chú tài chính"
  - "đối tác brazil"
  - "partner"
  - "business partner"
  - "onetime"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
semantic_en: "The BR Onetimepartner view exposes Brazilian onetime partner data, typically used when interacting with a business partner for a specific fiscal note."
app_component: FI-LOC-LO-BR
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_PartnerFunction` | ✓ | |  | `parvw` |  |  |
| `BusinessPartnerName1` |  | |  | `name1` |  |  |
| `BusinessPartnerName2` |  | |  | `name2` |  |  |
| `BR_PartnerCNPJ` |  | |  | `stcd1` |  |  |
| `BR_PartnerCPF` |  | |  | `stcd2` |  |  |
| `BR_PartnerStateTaxNumberST` |  | |  | `j_1bstains` |  |  |
| `BusinessPartnerTaxJurisdiction` |  | |  | `taxjurcode` |  |  |
| `BusinessPartnerStreetNameOnly` |  | |  | `street` |  |  |
| `BusinessPartnerStreetName` |  | |  | `stras` |  |  |
| `BusinessPartnerHouseNumber` |  | |  | `house_num1` |  |  |
| `BPHsNmbrSuplmntTxt` |  | |  | `house_num2` |  |  |
| `BusinessPartnerDistrict` |  | |  | `city2` |  |  |

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
