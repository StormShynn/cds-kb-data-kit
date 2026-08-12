---
name: I_PRODUCTSCM
description: "Productscm"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSCM

**Productscm**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `MaturationDuration` |  | |  | `cast (ActiveDocument.scm_maturity_dur as cmd_prd_maturity_dur_n preserving type )` |  |  |
| `RequiredMinShelfLife` |  | |  | `cast(0 as cmd_prd_shelf_life_req_min_n)` |  |  |
| `RequiredMaxShelfLife` |  | |  | `cast (ActiveDocument.scm_shlf_lfe_req_max as cmd_prd_shelf_life_req_max_n preserving type )` |  |  |
| `PreferredAlternativeUnit` |  | |  | `scm_puom` |  |  |
| `TotalShelfLife` |  | |  | `mhdhb` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `PckgBuildingReferenceProduct` |  | |  | `rmatp_pb` |  |  |
| `_Product` | | ✓ | | | | |
| `_UnitOfMeasureValueHelp` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProductScmExt` | `E_Product` | [0..1] |
| `_UnitOfMeasureValueHelp` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product SCM' //same as DDL description
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.sqlViewName: 'IPRODSCM' //must start with "I"
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.compiler.compareFilter:true 
define view I_Productscm
  as select from mara as ActiveDocument
  association [1..1] to I_Product           as _Product                on $projection.Product = _Product.Product
  association [0..1] to E_Product           as _ProductScmExt          on $projection.Product = _ProductScmExt.Product
  association [0..1] to I_UnitOfMeasure     as _UnitOfMeasureValueHelp on $projection.PreferredAlternativeUnit = _UnitOfMeasureValueHelp.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText as _UnitOfMeasureText      on $projection.PreferredAlternativeUnit = _UnitOfMeasureText.UnitOfMeasure
{

  key matnr                                                                                       as Product,

      cast (ActiveDocument.scm_maturity_dur as cmd_prd_maturity_dur_n preserving type )           as MaturationDuration,
      cast(0 as cmd_prd_shelf_life_req_min_n)                                                     as RequiredMinShelfLife,
      cast (ActiveDocument.scm_shlf_lfe_req_max as cmd_prd_shelf_life_req_max_n preserving type ) as RequiredMaxShelfLife,
      @ObjectModel.foreignKey.association: '_UnitOfMeasureValueHelp'
      @ObjectModel.text.association: '_UnitOfMeasureText'
      ActiveDocument.scm_puom                                                                     as PreferredAlternativeUnit,
      _UnitOfMeasureValueHelp,
      _UnitOfMeasureText,
      ActiveDocument.mhdhb                                                                        as TotalShelfLife,
      ActiveDocument.begru                                                                        as AuthorizationGroup,
      cast( 'X' as sdraft_is_active preserving type )                                             as IsActiveEntity, // to enbale extensibility in Draft 2.0
      ActiveDocument.rmatp_pb                                                                     as PckgBuildingReferenceProduct,
      _Product


}
```
