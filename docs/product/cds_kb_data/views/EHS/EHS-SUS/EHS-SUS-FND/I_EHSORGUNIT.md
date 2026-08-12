---
name: I_EHSORGUNIT
description: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNIT')/$value
semantic_en: "This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "OrganizationalUnit — CDS view giao diện dựa trên t527x."
keywords:
  - "organizationalunit"
  - "organizational"
  - "unit"
  - "code"
tags:
  - EHS
  - bo:businesspartner
  - component:EHS-SUS-FND
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - master-data
  - bo:salesorder
---
# I_EHSORGUNIT

**This CDS view provides access to organizational unit master data for Environment, Health, and Safety (EHS) management. It retrieves time-dependent organizational unit information that is valid for the current system date and language. This CDS view provides the data to answer the following business questions: Which organizational units are currently active in the system? What are the organizational unit codes for my organizational structure? How can I retrieve organizational unit codes and descriptions for reporting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalUnit` | ✓ | |  | `orgeh` | `NUMC(8)` | Organizational Unit |
| `OrganizationalUnitCode` |  | | `_OrgUnitCode` | `Name` | `CHAR(12)` | Object Abbreviation |
| `_OrgUnitText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrgUnitText` | `I_EHSOrgUnitText` | [0..*] |
| `_OrgUnitCode` | `P_PDOBJECT` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSORGUNIT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'OrganizationalUnit'
@VDM.viewType:  #BASIC

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@ObjectModel.representativeKey: 'OrganizationalUnit'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics : {dataCategory: #DIMENSION}
@Analytics.internalName:#LOCAL

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_EHSOrgUnit
  as select from t527x  
  association [0..*] to I_EHSOrgUnitText as _OrgUnitText on  $projection.OrganizationalUnit = _OrgUnitText.OrganizationalUnit           
  association [0..1] to P_PDOBJECT       as _OrgUnitCode on  $projection.OrganizationalUnit = _OrgUnitCode.ObjectID
                                                         and _OrgUnitCode.ObjectType        = 'O'
                                                         and _OrgUnitCode.EndDate           >= $session.system_date
                                                         and _OrgUnitCode.StartDate         <= $session.system_date
                                                                    
                                                         
{
 @ObjectModel.text.association: '_OrgUnitText'
  key t527x.orgeh       as OrganizationalUnit,
      _OrgUnitCode.Name as OrganizationalUnitCode,
      _OrgUnitText
}
 where  sprsl = $session.system_language and
        begda <= $session.system_date    and
        endda >= $session.system_date
```
