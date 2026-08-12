---
name: I_CABUSTRANSOBJECT
description: "Cabustransobject"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSTRANSOBJECT

**Cabustransobject**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusinessTransactionObject` | ✓ | |  | `cast( left( dd07l.domvalue_l, 8 ) as evl_objid_kk preserving type )` |  |  |
| `_CABusTransObjText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABusTransObjText` | `I_CABusTransObjectText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Object'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessTransactionObject',
                sapObjectNodeType.name: 'ContrAcctgBusTransObject',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransObject
  as select from dd07l

  association [1..*] to I_CABusTransObjectText as _CABusTransObjText on $projection.CABusinessTransactionObject = _CABusTransObjText.CABusinessTransactionObject

{
      @ObjectModel.text.association: '_CABusTransObjText'
  key cast( left( dd07l.domvalue_l, 8 ) as evl_objid_kk preserving type ) as CABusinessTransactionObject,

      _CABusTransObjText

}
where
      domname        = 'EVL_OBJID_KK'
  and dd07l.as4local = 'A'
```
