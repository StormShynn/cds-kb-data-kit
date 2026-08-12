---
name: I_PROPAGATEPRFTBLTYSGMT2BOMTXT
description: "Propagateprftbltysgmt 2BOMTXT"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PROPAGATEPRFTBLTYSGMT2BOMTXT

**Propagateprftbltysgmt 2BOMTXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PropagatePrftbltySgmt2BOM` | ✓ | |  | `cast ( substring(domvalue_l, 1, 1) as sd_sls_propagate_paobjnr_bom preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `PropagatePrftbltySgmt2BOMText` |  | |  | `ddtext` |  |  |
| `_PropagatePrftbltySgmt2BOM` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PropagatePrftbltySgmt2BOM` | `I_PropagatePrftbltySgmt2BOM` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IPROPPRFTSGMTBOM'

@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'PropagatePrftbltySgmt2BOM',
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [  #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #LANGUAGE_DEPENDENT_TEXT ]
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Propagate Prftblty Segment to BOM - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PropagatePrftbltySgmt2BOMTxt
  as select from dd07t
  
 association[0..1] to I_PropagatePrftbltySgmt2BOM as _PropagatePrftbltySgmt2BOM on $projection.PropagatePrftbltySgmt2BOM = _PropagatePrftbltySgmt2BOM.PropagatePrftbltySgmt2BOM
 association[0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language

{

  @ObjectModel.foreignKey.association: '_PropagatePrftbltySgmt2BOM'
  key cast ( substring(domvalue_l, 1, 1) as sd_sls_propagate_paobjnr_bom preserving type ) as PropagatePrftbltySgmt2BOM,

  @Semantics.language:true
  @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type)                                           as Language,
  
  @Semantics.text: true
  ddtext                                                                                   as PropagatePrftbltySgmt2BOMText,
    
  //Associations
  _PropagatePrftbltySgmt2BOM,
  _Language
  
}
where (dd07t.domname = 'SD_SLS_PROPAGATE_PAOBJNR_BOM') and (dd07t.as4local = 'A');
```
