---
name: I_PRAOWNER
description: "PRA Owner"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value
semantic_en: "PRA Owner"
semantic_vi: "PRA Owner — CDS view giao diện dựa trên PRA Owner."
keywords:
  - "pra"
  - "owner"
  - "name"
  - "affiliated"
  - "company"
  - "code"
  - "legal"
  - "form"
  - "authorization"
  - "group"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAOWNER

**PRA Owner**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAOwner` | ✓ | |  | `cast( vendid as oiu_own_no preserving type )` | `CHAR(10)` | PRA owner |
| `PRAOwnerName` |  | |  | `cast( _Supplier.SupplierName as oiu_vdm_owner_name preserving type )` | `CHAR(80)` | Name of Owner |
| `AffiliatedCompanyCode` |  | |  | `cast( intercocd as oiu_vdm_affiliated_company preserving type )` | `CHAR(4)` | Affiliated Company Code |
| `PRALegalForm` |  | |  | `/pra/bp_vend_md.enty_cd` | `CHAR(2)` | Entity Code |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
| `_Supplier` | | ✓ | | | | |
| `_AffiliatedCompanyCode` | | ✓ | | | | |
| `_PRALegalForm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |
| `_AffiliatedCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRALegalForm` | `I_PRALegalForm` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value)*

```abap
@EndUserText.label: 'PRA Owner'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOWNER'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['_Supplier']
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PRAOwner'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'PRAOwner'
define view I_PRAOwner
  as select from /pra/bp_vend_md
  association [1..1] to I_Supplier     as _Supplier              on $projection.PRAOwner = _Supplier.Supplier
  association [0..1] to I_CompanyCode  as _AffiliatedCompanyCode on $projection.AffiliatedCompanyCode = _AffiliatedCompanyCode.CompanyCode
  association [0..1] to I_PRALegalForm as _PRALegalForm          on $projection.PRALegalForm = _PRALegalForm.PRALegalForm
{
      @ObjectModel.text.element:  [ 'PRAOwnerName' ]
      @Search    : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}
  key cast( vendid as oiu_own_no preserving type )                         as PRAOwner,
      @Semantics.text: true
      cast( _Supplier.SupplierName as oiu_vdm_owner_name preserving type ) as PRAOwnerName,
      @ObjectModel.foreignKey.association: '_AffiliatedCompanyCode'
      cast( intercocd as oiu_vdm_affiliated_company preserving type )      as AffiliatedCompanyCode,
      @ObjectModel.foreignKey.association: '_PRALegalForm'
      /pra/bp_vend_md.enty_cd                                              as PRALegalForm,
      _Supplier.AuthorizationGroup                                         as AuthorizationGroup,
      _Supplier.SupplierAccountGroup                                       as SupplierAccountGroup,
      /* Associations */
      _AffiliatedCompanyCode,
      _PRALegalForm,
      _Supplier
}
```
