---
name: I_PRACONTRACT
description: "PRA Contract"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value
semantic_en: "PRA Contract"
semantic_vi: "PRA Contract — CDS view giao diện dựa trên oiucm_contract."
keywords:
  - "pra"
  - "contract"
  - "desc"
  - "date"
  - "sold"
  - "party"
  - "company"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - contract
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRACONTRACT

**PRA Contract**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAContract` | ✓ | |  | `vbeln` | `CHAR(10)` | Contract Number |
| `PRAContractDesc` |  | |  | `cast( ktext as oiu_vdm_contract_description )` | `CHAR(40)` | Contract Description |
| `PRAContractDate` |  | |  | `audat` | `DATS(8)` | Document Date (Date Received/Sent) |
| `SoldToParty` |  | |  | `kunnr` | `CHAR(10)` | Sold-to Party |
| `CompanyCode` |  | |  | `cast ( bukrs_vf as fis_bukrs)` | `CHAR(4)` | Company Code |
| `PRAContractType` |  | |  | `oiu_ct_type_cd` | `CHAR(2)` | Contract Type |
| `IsApproved` |  | |  | `oiu_appr_fl` | `CHAR(1)` | Approval indicator |
| `PreviousPRAContract` |  | |  | `oiu_prev_ct_no` | `CHAR(10)` | Old / Previous Contract Number |
| `CustomerOrSupplierType` |  | |  | `oiu_cust_vend_cd` | `CHAR(1)` | Customer/Vendor Indicator |
| `MarketingRep` |  | |  | `oiu_mk_rep_no` | `CHAR(10)` | Marketing Representative No |
| `MarketingRepIntrstSequNmbr` |  | |  | `oiu_mk_rep_isq` | `CHAR(2)` | Marketing Representative Interest Sequence No |
| `MarketingRepName` |  | |  | `cast( bname as oiu_vdm_marketing_rep_name )` | `CHAR(35)` | Marketing Representative Name |
| `MarketingRepCustomer` |  | |  | `cast( case oiu_cust_vend_cd when 'C' then oiu_mk_rep_no end as oiu_vdm_marketing_rep_cust )` | `CHAR(10)` | Marketing Representative Customer |
| `MarketingRepSupplier` |  | |  | `cast( case oiu_cust_vend_cd when 'V' then oiu_mk_rep_no end as oiu_vdm_marketing_rep_suppl )` | `CHAR(10)` | Marketing Representative Supplier |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `cast( erzet as oiu_vdm_creation_time)` | `TIMS(6)` | Creation Time |
| `_SoldToParty` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PRAContractType` | | ✓ | | | | |
| `_MarketingRepCustomer` | | ✓ | | | | |
| `_MarketingRepSupplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRAContractType` | `I_PRAContractType` | [0..1] |
| `_MarketingRepCustomer` | `I_Customer` | [0..1] |
| `_MarketingRepSupplier` | `I_Supplier` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value)*

```abap
@EndUserText.label: 'PRA Contract'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCONTRACT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PRAContract'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAContract'

define view I_PRAContract
  as select from oiucm_contract
  association [0..1] to I_Customer        as _SoldToParty          on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_CompanyCode     as _CompanyCode          on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAContractType as _PRAContractType      on $projection.PRAContractType = _PRAContractType.PRAContractType
  association [0..1] to I_Customer        as _MarketingRepCustomer on $projection.MarketingRepCustomer = _MarketingRepCustomer.Customer
  association [0..1] to I_Supplier        as _MarketingRepSupplier on $projection.MarketingRepSupplier = _MarketingRepSupplier.Supplier
{
      @ObjectModel.text.element:  [ 'PRAContractDesc' ]
  key vbeln                                                                                             as PRAContract,
      @Semantics.text: true
      cast( ktext as oiu_vdm_contract_description )                                                     as PRAContractDesc,
      @Semantics.businessDate.at: true
      audat                                                                                             as PRAContractDate,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      kunnr                                                                                             as SoldToParty,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast ( bukrs_vf as fis_bukrs)                                                                     as CompanyCode,
      @ObjectModel.foreignKey.association: '_PRAContractType'
      oiu_ct_type_cd                                                                                    as PRAContractType,
      oiu_appr_fl                                                                                       as IsApproved,
      oiu_prev_ct_no                                                                                    as PreviousPRAContract,
      oiu_cust_vend_cd                                                                                  as CustomerOrSupplierType,
      oiu_mk_rep_no                                                                                     as MarketingRep,
      oiu_mk_rep_isq                                                                                    as MarketingRepIntrstSequNmbr,
      cast( bname as oiu_vdm_marketing_rep_name )                                                       as MarketingRepName,

      @ObjectModel.foreignKey.association: '_MarketingRepCustomer'
      cast( case oiu_cust_vend_cd when 'C' then oiu_mk_rep_no end as oiu_vdm_marketing_rep_cust )       as MarketingRepCustomer,
      @ObjectModel.foreignKey.association: '_MarketingRepSupplier'
      cast( case oiu_cust_vend_cd when 'V' then oiu_mk_rep_no end as oiu_vdm_marketing_rep_suppl )      as MarketingRepSupplier,

      //adminstrative
      @Semantics.user.createdBy: true
      ernam                                                                                             as CreatedByUser,
      @Semantics.businessDate.createdAt: true
      erdat                                                                                             as CreationDate,
      cast( erzet as oiu_vdm_creation_time)                                                             as CreationTime,
      _SoldToParty,
      _PRAContractType,
      _MarketingRepCustomer,
      _MarketingRepSupplier,
      _CompanyCode
};
```
