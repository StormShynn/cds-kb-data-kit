---
name: I_PROPAGATEPRFTBLTYSGMT2BOM
description: "Propagateprftbltysgmt 2BOM"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - bom
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_PROPAGATEPRFTBLTYSGMT2BOM

**Propagateprftbltysgmt 2BOM**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PropagatePrftbltySgmt2BOM` | ✓ | |  | `cast (substring(dd07l.domvalue_l, 1, 1 ) as sd_sls_propagate_paobjnr_bom preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PropagatePrftbltySgmt2BOMTxt` | [0..*] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}
  
@ObjectModel:{
  representativeKey: 'PropagatePrftbltySgmt2BOM',
  resultSet.sizeCategory: #XS,
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #ANALYTICAL_DIMENSION ]
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Propagate Prftblty Segment to BOM'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PropagatePrftbltySgmt2BOM 
  as select from dd07l
  
association [0..*] to I_PropagatePrftbltySgmt2BOMTxt as _Text on $projection.PropagatePrftbltySgmt2BOM = _Text.PropagatePrftbltySgmt2BOM

{ 
  @ObjectModel.text.association: '_Text'
  key cast (substring(dd07l.domvalue_l, 1, 1 ) as sd_sls_propagate_paobjnr_bom preserving type ) as PropagatePrftbltySgmt2BOM,

  _Text 
}
where (dd07l.domname = 'SD_SLS_PROPAGATE_PAOBJNR_BOM') and (dd07l.as4local = 'A');
```
