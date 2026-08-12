---
name: I_CONTROLLINGOBJECT
description: "Controllingobject"
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGOBJECT

**Controllingobject**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `ControllingObject` | ✓ | |  | `objnr` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `BusinessProcess` |  | |  | `prznr` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `SalesDocument` |  | |  | `vbeln` |  |  |
| `SalesDocumentItem` |  | |  | `posnr` |  |  |
| `ControllingArea` |  | |  | `cast ( COALESCE ( COALESCE( COALESCE(onrks.kokrs, onrbp.kokrs ), onrkl.kokrs), '') as fis_kokrs )` |  |  |
| `CostCenter` |  | |  | `cast( COALESCE(onrks.kostl, onrkl.kostl) as fis_kostl )` |  |  |
| `WBSElementInternalID` |  | |  | `cast( onrpr.pspnr as fis_wbsint_no_conv preserving type )` |  |  |
| `ProjectInternalID` |  | |  | `cast( onrpd.pspnr as fis_projectint_no_conv preserving type)` |  |  |
| `ControllingObjectType` |  | |  | `cast ( SUBSTRING( onr00.objnr, 1, 2) as j_obart)` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Controlling Object'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOOBJECT'
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.representativeKey: 'ControllingObject'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 

@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_ControllingObject
// Corresponds to calculation view 'sap.hba.ecc.ControllingObject'
as select from onr00

left outer join onrks on  onr00.objnr = onrks.objnr
left outer join onrbp on  onr00.objnr = onrbp.objnr
left outer join onrkl on  onr00.objnr = onrkl.objnr
left outer join onror on  onr00.objnr = onror.objnr
//left outer join onrov on  Join_4.objnr = onrov.objnr
left outer join onrpd on  onr00.objnr = onrpd.objnr
left outer join onrpr on  onr00.objnr = onrpr.objnr
left outer join onrvb on  onr00.objnr = onrvb.objnr

association[1]          to I_ControllingArea              as _ControllingArea         
    on  $projection.ControllingArea         = _ControllingArea.ControllingArea
association [0..*]      to I_CostCenter                   as _CostCenter             
    on  $projection.CostCenter              = _CostCenter.CostCenter
    and $projection.ControllingArea         = _CostCenter.ControllingArea
association[0..*]       to I_CostCenterActivityType       as _CostCtrActivityType     
    on  $projection.CostCtrActivityType     = _CostCtrActivityType.CostCtrActivityType
    and $projection.ControllingArea         = _CostCtrActivityType.ControllingArea    
{

  
  
  key   onr00.objnr as ControllingObject,

        onror.aufnr as OrderID,

        onrbp.prznr as BusinessProcess,

        onrkl.lstar as CostCtrActivityType,

        onrvb.vbeln as SalesDocument,

        onrvb.posnr as SalesDocumentItem,
 
        cast ( COALESCE ( COALESCE( COALESCE(onrks.kokrs, onrbp.kokrs ),   onrkl.kokrs), '')  as fis_kokrs ) as ControllingArea,

        cast( COALESCE(onrks.kostl, onrkl.kostl) as fis_kostl ) as CostCenter,

        cast( onrpr.pspnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,
        cast( onrpd.pspnr as fis_projectint_no_conv preserving type) as ProjectInternalID,
        cast ( SUBSTRING( onr00.objnr, 1, 2) as j_obart) as ControllingObjectType,
        _ControllingArea ,
        _CostCenter ,
        _CostCtrActivityType  
        
};
```
