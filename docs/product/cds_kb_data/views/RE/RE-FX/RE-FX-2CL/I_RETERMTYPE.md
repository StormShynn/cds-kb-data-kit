---
name: I_RETERMTYPE
description: "Retermtype"
app_component: RE-FX-2CL
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
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETERMTYPE

**Retermtype**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
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
| `RealEstateObjectType` | ✓ | |  | `objtype` |  |  |
| `RETermType` | ✓ | |  | `termtype` |  |  |
| `RETermCategory` |  | |  | `termcate` |  |  |
| `_REObjectType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_Text` | `I_RETermTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Term Type'
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}
@Analytics.technicalName: 'IRETERMTYPE'
@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #B,
                        sizeCategory: #S
            },
            representativeKey: 'RETermType',
            semanticKey: [ 'RETermType', 'RealEstateObjectType' ],
            sapObjectNodeType.name: 'RealEstateTermType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE],
            modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_RETermType
  as select from tivtmtermtype
  association [1..1] to I_REObjectType   as _REObjectType on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [0..*] to I_RETermTypeText as _Text         on  $projection.RealEstateObjectType = _Text.RealEstateObjectType
                                                          and $projection.RETermType           = _Text.RETermType
{
        @ObjectModel.foreignKey.association:  '_REObjectType'
  key   objtype  as RealEstateObjectType,
        @ObjectModel.text.association: '_Text'
  key   termtype as RETermType,
        termcate as RETermCategory,

        _Text,
        _REObjectType


}
```
