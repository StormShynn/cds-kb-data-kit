---
name: I_BR_BUSINESSPLACE
description: "BR Businessplace"
semantic_vi: "View BR Businessplace CDS hiển thị dữ liệu địa điểm kinh doanh, bao gồm mã công ty, thông tin chi nhánh và số thuế, có ích cho các ứng dụng tài chính và liên quan đến địa điểm."
keywords:
  - "business place"
  - "địa điểm kinh doanh"
  - "company code"
  - "mã công ty"
  - "branch"
  - "chi nhánh"
  - "tax number"
  - "số thuế"
  - "sap"
  - "fi-loc-lo-br"
semantic_en: "The BR Businessplace CDS view exposes business place data, including company codes, branch information, and tax numbers, which is useful for financial and location-related applications."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_BUSINESSPLACE

**BR Businessplace**

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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `Branch` | ✓ | |  | `branch` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `BusinessPlaceName` |  | |  | `case when _NFBusinessPlaceText[language = $session.system_language].name is not null then _NFBusinessPlaceText[language = $session.system_language].name else name end` |  |  |
| `BR_BusinessPlacePartOfCNPJ` |  | |  | `cast(case when NFBusinessPlace.cgc_branch > '9999' then '0000' else NFBusinessPlace.cgc_branch end as logbr_cgcbra_numc )` |  |  |
| `BR_BusinessPlacePartOfCNPJ_2` |  | |  | `cgc_branch` |  |  |
| `BusinessPlaceStateTaxNumber` |  | |  | `state_insc` |  |  |
| `BusPlaceMunicipalTaxNumber` |  | |  | `munic_insc` |  |  |
| `BR_SUFRAMACode` |  | |  | `suframa` |  |  |
| `BusinessPlaceActivity` |  | |  | `spedactind` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NFBusinessPlaceText` | `j_1bbrancht` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRBUSINESSPLACE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Business Place'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_BusinessPlace
  as select from j_1bbranch as NFBusinessPlace
  association [0..*] to j_1bbrancht as _NFBusinessPlaceText on  $projection.CompanyCode = _NFBusinessPlaceText.bukrs
                                                            and $projection.Branch = _NFBusinessPlaceText.branch
                                                            and _NFBusinessPlaceText.bupla_type   = ''
  {

    key NFBusinessPlace.bukrs   as CompanyCode,
    key NFBusinessPlace.branch  as Branch,
    NFBusinessPlace.adrnr       as AddressID,
    @Semantics.text: true
    case
      when _NFBusinessPlaceText[language = $session.system_language].name is not null
        then _NFBusinessPlaceText[language = $session.system_language].name
      else name
    end as BusinessPlaceName,
    @API.element.releaseState: #DEPRECATED
    @API.element.successor: 'BR_BusinessPlacePartOfCNPJ_2'
    @API.element.decommissioningPlannedForYearMonth: '2026-07'
    cast(case
      when NFBusinessPlace.cgc_branch > '9999'
        then '0000'
      else NFBusinessPlace.cgc_branch 
    end as logbr_cgcbra_numc )  as BR_BusinessPlacePartOfCNPJ,
    NFBusinessPlace.cgc_branch  as BR_BusinessPlacePartOfCNPJ_2,
    NFBusinessPlace.state_insc  as BusinessPlaceStateTaxNumber,
    NFBusinessPlace.munic_insc  as BusPlaceMunicipalTaxNumber,
    NFBusinessPlace.suframa     as BR_SUFRAMACode,
    NFBusinessPlace.spedactind  as BusinessPlaceActivity
  }
```
