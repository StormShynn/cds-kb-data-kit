---
name: I_MAINTENANCEEVENTLIKELIHOOD
description: "Likelihood of Maintenance Event"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEEVENTLIKELIHOOD')/$value
semantic_en: "Likelihood of Maintenance Event"
semantic_vi: "Likelihood of Maintenance Event — CDS view giao diện dựa trên eam_occren."
keywords:
  - "likelihood"
  - "maintenance"
  - "event"
  - "maint"
  - "code"
  - "lklihd"
  - "position"
  - "value"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTENANCEEVENTLIKELIHOOD

**Likelihood of Maintenance Event**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEEVENTLIKELIHOOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEventLikelihoodCode` | ✓ | |  | `mainteventoccrencode` | `NUMC(2)` | Likelihood ID |
| `MaintEvtLklihdPositionValue` |  | |  | `mainteventoccrenposition` | `NUMC(2)` | Indicates the position of  occurrence on the UI |
| `_MaintEventLikelihoodText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintEventLikelihoodText` | `I_MaintEventLikelihoodText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEEVENTLIKELIHOOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEEVENTLIKELIHOOD')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Likelihood of Maintenance Event'
@ObjectModel.representativeKey: 'MaintEventLikelihoodCode'
@Analytics.technicalName: 'IMAINTEVTLKLIHD'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S

// for data extraction
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceEventLikelihood'                                               
@Metadata.ignorePropagatedAnnotations: true
                                      
define view entity I_MaintenanceEventLikelihood as select from eam_occren
    association [0..*] to I_MaintEventLikelihoodText as _MaintEventLikelihoodText 
   on $projection.MaintEventLikelihoodCode = _MaintEventLikelihoodText .MaintEventLikelihoodCode
{
    @ObjectModel.text.association: '_MaintEventLikelihoodText'
    key mainteventoccrencode as MaintEventLikelihoodCode,
    mainteventoccrenposition as  MaintEvtLklihdPositionValue
    //Associations
    ,_MaintEventLikelihoodText 
}
```
