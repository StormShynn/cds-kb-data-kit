---
name: I_CADOCCTNDOCITEMREFTYPE
description: "Cadocctndocitemreftype"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCCTNDOCITEMREFTYPE

**Cadocctndocitemreftype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocContainerDocItemRefType` | ✓ | |  | `cast( left( dd07l.domvalue_l, 2 ) as oprty_dc_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADocCtnDocItemRefTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Doc Container Doc Item Reference Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocContainerDocItemRefType',
                sapObjectNodeType.name: 'ContrAcctgDocCtnDocItemRefType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocCtnDocItemRefType
  as select from dd07l

  association [1..*] to I_CADocCtnDocItemRefTypeText as _Text on $projection.CADocContainerDocItemRefType = _Text.CADocContainerDocItemRefType

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 2 ) as oprty_dc_kk preserving type ) as CADocContainerDocItemRefType,

      //associations
      _Text
}
where
      domname  = 'OPRTY_DC_KK'
  and as4local = 'A'
```
