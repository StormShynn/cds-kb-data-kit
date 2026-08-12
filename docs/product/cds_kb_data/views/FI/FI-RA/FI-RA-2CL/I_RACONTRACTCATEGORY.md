---
name: I_RACONTRACTCATEGORY
description: "Racontractcategory"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - contract
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RACONTRACTCATEGORY

**Racontractcategory**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevnAcctgContractCategory` | ✓ | |  | `contract_cat` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RAContractCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRACONTRCAT'

@EndUserText.label: 'Revenue Accounting Contract Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'RevnAcctgContractCategory'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@VDM.viewType: #BASIC

define view entity I_RAContractCategory
  as select from farr_c_contcat

  association [0..*] to I_RAContractCategoryText as _Text
    on $projection.RevnAcctgContractCategory = _Text.RevnAcctgContractCategory

{
      @ObjectModel.text.association: '_Text'
  key contract_cat as RevnAcctgContractCategory,

      _Text

}
```
