---
name: I_SALESORGANIZATIONDIVISION
description: Sales OrganizationDIVISION
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - sales-organization
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
  - bo:SalesOrganization
---
# I_SALESORGANIZATIONDIVISION

**Sales OrganizationDIVISION**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `vkorg` |
| `Division` | ✓ | |  | `spart` |
| `ReferenceDivision` |  | |  | `spaku` |
| `_SalesOrganization` | | ✓ | | |
| `_Division` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Organization Division'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SalesOrganization'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY
                                    ]
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SalesOrgDivisionAssgmt'

define view entity I_SalesOrganizationDivision
as select from tvkos
association [0..1] to I_SalesOrganization as _SalesOrganization
  on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
association [0..1] to I_Division as _Division
  on $projection.Division = _Division.Division
{

// @ObjectModel.foreignKey.association: '_SalesOrganization'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key vkorg as SalesOrganization,

  @ObjectModel.foreignKey.association: '_Division'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH    
  key spart as Division,
  
  spaku as ReferenceDivision,
  
  _SalesOrganization,
  _Division
}
```
