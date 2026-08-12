---
name: I_SALESDOCUMENTSTDVH
description: "Salesdocumentstdvh"
app_component: SD-SLS-2CL
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
  - interface-view
  - value-help
  - standard-value-help
  - sales-document
  - document
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTSTDVH

**Salesdocumentstdvh**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSDOCVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SalesDocument'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Document'
define view I_SalesDocumentStdVH as select from I_SalesDocument {
 @Search.defaultSearchElement: true 
 @Search.ranking: #HIGH

  key SalesDocument,

  @Consumption.hidden: true
  DistributionChannel,
  @Consumption.hidden: true
  OrganizationDivision,
  @Consumption.hidden: true
  SalesDocumentType,
  @Consumption.hidden: true
  SalesOrganization
}
```
