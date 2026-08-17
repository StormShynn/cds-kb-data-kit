---
name: I_BR_NFPARTNER
description: "BR Nfpartner"
semantic_vi: "View BR Nfpartner hiển thị dữ liệu kinh doanh về đối tác tham gia vào các ghi chú thuế Brazil, bao gồm chức năng và địa chỉ của họ. Nó được sử dụng để truy cập và quản lý thông tin đối tác trong thành phần FI-LOC-LO-BR."
keywords:
  - "br_nfpartner"
  - "brazilian tax note"
  - "đối tác"
  - "chức năng"
  - "địa chỉ"
  - "fi-loc-lo-br"
  - "partner information"
  - "nghĩa vụ thuế brazil"
  - "đơn vị kinh doanh"
  - "finance"
semantic_en: "The BR Nfpartner view exposes business data about partners involved in Brazilian tax notes, including their functions and addresses. It is used to access and manage partner information in the FI-LOC-LO-BR component."
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
# I_BR_NFPARTNER

**BR Nfpartner**

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
| `BR_NFPartnerFunction` | ✓ | |  | `cast(NFPartner.parvw as logbr_parvw preserving type)` |  |  |
| `BR_NFPartner` |  | |  | `parid` |  |  |
| `BR_NFPartnerTitle` |  | |  | `cast(NFPartner.anred as logbr_anred preserving type)` |  |  |
| `BR_NFPartnerName1` |  | |  | `name1` |  |  |
| `BR_NFPartnerName2` |  | |  | `name2` |  |  |
| `BR_NFPartnerName3` |  | |  | `name3` |  |  |
| `BR_NFPartnerName4` |  | |  | `name4` |  |  |
| `BR_NFPartnerType` |  | |  | `cast(NFPartner.partyp as logbr_nfpartnertype preserving type)` |  |  |
| `BR_NFPartnerStreetName` |  | |  | `stras` |  |  |
| `BR_NFPartnerCityName` |  | |  | `ort01` |  |  |
| `BR_NFPartnerRegionCode` |  | |  | `regio` |  |  |
| `BR_NFPartnerDistrictName` |  | |  | `ort02` |  |  |
| `BR_NFPartnerCountryCode` |  | |  | `land1` |  |  |
| `BR_NFPartnerPostalCode` |  | |  | `pstlz` |  |  |
| `BR_NFPartnerCFOPCategory` |  | |  | `cast(NFPartner.indust as logbr_indus1 preserving type)` |  |  |
| `BR_NFPartnerIsNaturalPerson` |  | |  | `stkzn` |  |  |
| `BR_NFPartnerCNPJ` |  | |  | `cast(case when NFPartner.cgc > '99999999999999' then '00000000000000' else NFPartner.cgc end as logbr_cnpj_numc )` |  |  |
| `BR_NFPartnerCNPJ_2` |  | |  | `cast(NFPartner.cgc as logbr_cnpj preserving type)` |  |  |
| `BR_NFPartnerCPF` |  | |  | `cast(NFPartner.cpf as logbr_cpf preserving type)` |  |  |
| `PhoneNumber` |  | |  | `telf1` |  |  |
| `BR_NFPartnerStateTaxNumber` |  | |  | `stains` |  |  |
| `BR_NFPartnerMunicipalTaxNumber` |  | |  | `cast(NFPartner.munins as logbr_munins preserving type)` |  |  |
| `TaxJurisdiction` |  | |  | `cast(NFPartner.txjcd as logbr_txjcd preserving type)` |  |  |
| `BR_CTeFiscalDocumentPartner` |  | |  | `cte_partner` |  |  |
| `BR_NFPartnerPlaceType` |  | |  | `cast(NFPartner.partner_role as logbr_part_role preserving type )` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `case when _Supplier.IsBusinessPurposeCompleted = 'X' or _Customer.IsBusinessPurposeCompleted = 'X' then 'X' else '' end` |  |  |
| `CountryShortName` |  | | `_CountryText` | `CountryShortName` |  |  |
| `_BR_NFPartnerType` | | ✓ | | | | |
| `_BR_PartnerPlaceType` | | ✓ | | | | |
| `_BR_CTeFiscalDocPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFPartnerType` | `I_BR_NFPartnerType` | [0..1] |
| `_BR_PartnerPlaceType` | `I_BR_PartnerPlaceType` | [0..1] |
| `_BR_CTeFiscalDocPartner` | `I_BR_CTeFiscalDocPartner` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFPARTNER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Partner'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFPartner
  as select from j_1bnfnad as NFPartner
  association [0..1] to I_BR_NFPartnerType       as _BR_NFPartnerType       on _BR_NFPartnerType.BR_NFPartnerType = $projection.BR_NFPartnerType
  association [0..1] to I_BR_PartnerPlaceType    as _BR_PartnerPlaceType       on _BR_PartnerPlaceType.BR_NFPartnerPlaceType = $projection.BR_NFPartnerPlaceType
  association [0..1] to I_BR_CTeFiscalDocPartner as _BR_CTeFiscalDocPartner on _BR_CTeFiscalDocPartner.BR_CTeFiscalDocumentPartner = $projection.BR_CTeFiscalDocumentPartner
  association [0..1] to I_Supplier               as _Supplier               on _Supplier.Supplier = $projection.BR_NFPartner
  association [0..1] to I_Customer               as _Customer               on _Customer.Customer = $projection.BR_NFPartner
  association [0..1] to I_CountryText            as _CountryText            on  _CountryText.Country = $projection.BR_NFPartnerCountryCode
                                                                            and _CountryText.Language = $session.system_language
{
  key NFPartner.docnum                                                 as BR_NotaFiscal,
  key cast(NFPartner.parvw as logbr_parvw preserving type)             as BR_NFPartnerFunction,
      NFPartner.parid                                                  as BR_NFPartner,
      cast(NFPartner.anred as logbr_anred preserving type)             as BR_NFPartnerTitle,
      NFPartner.name1                                                  as BR_NFPartnerName1,
      NFPartner.name2                                                  as BR_NFPartnerName2,
      NFPartner.name3                                                  as BR_NFPartnerName3,
      NFPartner.name4                                                  as BR_NFPartnerName4,
      @ObjectModel.foreignKey.association: '_BR_NFPartnerType'
      cast(NFPartner.partyp as logbr_nfpartnertype preserving type)    as BR_NFPartnerType,
      NFPartner.stras                                                  as BR_NFPartnerStreetName,
      NFPartner.ort01                                                  as BR_NFPartnerCityName,
      NFPartner.regio                                                  as BR_NFPartnerRegionCode,
      NFPartner.ort02                                                  as BR_NFPartnerDistrictName,
      NFPartner.land1                                                  as BR_NFPartnerCountryCode,
      NFPartner.pstlz                                                  as BR_NFPartnerPostalCode,
      cast(NFPartner.indust as logbr_indus1 preserving type)           as BR_NFPartnerCFOPCategory,
      @Semantics.booleanIndicator: true
      NFPartner.stkzn                                                  as BR_NFPartnerIsNaturalPerson,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BR_NFPartnerCNPJ_2'
      @API.element.decommissioningPlannedForYearMonth: '2026-07'
      cast(case
        when NFPartner.cgc > '99999999999999'
          then '00000000000000'
        else NFPartner.cgc end as logbr_cnpj_numc )                    as BR_NFPartnerCNPJ,      
      cast(NFPartner.cgc as logbr_cnpj preserving type)                as BR_NFPartnerCNPJ_2,
      cast(NFPartner.cpf as logbr_cpf preserving type)                 as BR_NFPartnerCPF,
      NFPartner.telf1                                                  as PhoneNumber,
      NFPartner.stains                                                 as BR_NFPartnerStateTaxNumber,
      cast(NFPartner.munins as logbr_munins preserving type)           as BR_NFPartnerMunicipalTaxNumber,
      cast(NFPartner.txjcd as logbr_txjcd preserving type)             as TaxJurisdiction,
      NFPartner.cte_partner                                            as BR_CTeFiscalDocumentPartner,
      cast(NFPartner.partner_role as logbr_part_role preserving type ) as BR_NFPartnerPlaceType,

      @Semantics.booleanIndicator: true
      case
        when _Supplier.IsBusinessPurposeCompleted = 'X' or
             _Customer.IsBusinessPurposeCompleted = 'X'
        then 'X'
        else ''
      end                                                              as IsBusinessPurposeCompleted,

      _BR_NFPartnerType,
      _BR_PartnerPlaceType,
      _BR_CTeFiscalDocPartner,
      _CountryText.CountryShortName



}
```
