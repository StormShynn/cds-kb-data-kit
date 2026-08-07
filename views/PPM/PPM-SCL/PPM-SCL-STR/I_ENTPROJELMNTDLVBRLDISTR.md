---
name: I_ENTPROJELMNTDLVBRLDISTR
description: "Entprojelmntdlvbrldistr"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTDLVBRLDISTR

**Entprojelmntdlvbrldistr**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntDlvbrlDistrUUID` | ✓ | |  | `entprojelmntdlvbrldistruuid` |  |  |
| `EntProjElmntDeliverableUUID` |  | |  | `entprojelmntdeliverableuuid` |  |  |
| `ProjectElementUUID` |  | |  | `projectelementuuid` |  |  |
| `ProjectUUID` |  | |  | `projectuuid` |  |  |
| `EntProjElmntDlvbrlDistrYearVal` |  | |  | `entprojelmntdlvbrldistryearval` |  |  |
| `EntProjElmntDlvbrlDistrPerdVal` |  | |  | `entprojelmntdlvbrldistrperdval` |  |  |
| `EntProjElmntDlvbrlDistrQty` |  | |  | `entprojelmntdlvbrldistrqty` |  |  |
| `EntProjElmntDlvbrlDistrQtyUnit` |  | |  | `entprojelmntdlvbrldistrqtyunit` |  |  |
| `_EntProjElmntDlvbrl` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntProjElmntDlvbrl` | `I_EntProjElmntDlvbrl` | [1..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
   representativeKey: 'EntProjElmntDlvbrlDistrUUID',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE  ],   
   usageType: {
     serviceQuality:  #B,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}

@ObjectModel.sapObjectNodeType.name: 'EntProjElmntDlvbrlDistr'
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Deliverable Distribution of Ent Proj Elmnt'

define view entity I_EntProjElmntDlvbrlDistr as select from /s4ppm/dlvdistr
  association [1..1] to I_EntProjElmntDlvbrl as _EntProjElmntDlvbrl
      on $projection.EntProjElmntDeliverableUUID = _EntProjElmntDlvbrl.EntProjElmntDeliverableUUID 
  association [1..1] to I_EnterpriseProject        as _EnterpriseProject         
      on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID 
  association [1..1] to I_EnterpriseProjectElement        as _EnterpriseProjectElement         
      on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID 

{
    key entprojelmntdlvbrldistruuid as EntProjElmntDlvbrlDistrUUID,
    entprojelmntdeliverableuuid     as EntProjElmntDeliverableUUID,
    projectelementuuid              as ProjectElementUUID,
    projectuuid                     as ProjectUUID,
    entprojelmntdlvbrldistryearval  as EntProjElmntDlvbrlDistrYearVal,
    entprojelmntdlvbrldistrperdval  as EntProjElmntDlvbrlDistrPerdVal,
    @Semantics.quantity.unitOfMeasure : 'EntProjElmntDlvbrlDistrQtyUnit'
    entprojelmntdlvbrldistrqty      as EntProjElmntDlvbrlDistrQty,
    entprojelmntdlvbrldistrqtyunit  as EntProjElmntDlvbrlDistrQtyUnit,
    
    _EntProjElmntDlvbrl,
    @Consumption.hidden: true
    _EnterpriseProject,
    @Consumption.hidden: true
    _EnterpriseProjectElement
}
```
