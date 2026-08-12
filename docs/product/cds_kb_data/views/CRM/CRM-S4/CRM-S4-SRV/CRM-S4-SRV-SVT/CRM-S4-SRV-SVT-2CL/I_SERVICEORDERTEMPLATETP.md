---
name: I_SERVICEORDERTEMPLATETP
description: "Service OrderTEMPLATETP"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - service
  - service-order
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SERVICEORDERTEMPLATETP

**Service OrderTEMPLATETP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceOrderTemplateType` |  | |  |  |  |  |
| `ServiceOrderTemplateUUID` |  | |  |  |  |  |
| `SrvcOrdTmplDescription` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `SrvcDocTmplValdtyStartDateTime` |  | |  |  |  |  |
| `SrvcDocTmplValdtyEndDateTime` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `EnterpriseServiceOrganization` |  | |  |  |  |  |
| `ServiceDocumentTemplateType` |  | |  |  |  |  |
| `SrvcDocTemplateSearchTermText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `SrvcOrdTmplIsNew` |  | |  |  |  |  |
| `SrvcOrdTmplIsInProcess` |  | |  |  |  |  |
| `SrvcOrdTmplIsReleased` |  | |  |  |  |  |
| `SrvcOrdTmplIsCompleted` |  | |  |  |  |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SrvcOrdTmplStatus` | | ✓ | | | | |
| `_ServiceOrderTemplateItemTP` | | ✓ | | | | |
| `_SrvcOrdTmplReferenceObjectTP` | | ✓ | | | | |
| `_SrvcOrdTmplUserStatusTP` | | ✓ | | | | |
| `_SrvcOrdTmplLongTextTP` | | ✓ | | | | |
| `_SrvcOrdTmplAppointmentTP` | | ✓ | | | | |
| `_SrvcOrdTmplDurationTP` | | ✓ | | | | |
| `_SrvcOrdTmplPartnerTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Template - TP'
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel: {
   sapObjectNodeType.name: 'ServiceOrderTemplate',
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {           dataClass:      #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory:   #L }
              }

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ServiceOrderTemplateTP
  provider contract transactional_interface
  as projection on R_ServiceOrderTemplateTP as _ServiceOrderTemplateTP
{

  key  ServiceOrderTemplate,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_ServiceDocumentTypeStdVH', element: 'ServiceObjectType' },  useAsTemplate: true}] - not C1 released
       @ObjectModel.foreignKey.association: '_ServiceObjType'
       ServiceObjectType,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_ServiceDocumentTypeStdVH', element: 'ServiceDocumentType' },  useAsTemplate: true}] - not C1 released
       @ObjectModel.foreignKey.association: '_ServiceDocumentType'
       ServiceOrderTemplateType,
       ServiceOrderTemplateUUID,
       SrvcOrdTmplDescription,
       @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
       ServiceDocumentPriority,
       SrvcDocTmplValdtyStartDateTime,
       SrvcDocTmplValdtyEndDateTime,
       @Feature: 'BF:API_FULLSCOPE'
       @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
       SalesGroupOrgUnitID,
       @Feature: 'BF:API_FULLSCOPE'
       @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
       SalesOfficeOrgUnitID,
       @Feature: 'BF:API_FULLSCOPE'
       @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
       SalesOrganizationOrgUnitID,
       @Feature: 'BF:API_FULLSCOPE'
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'C_SalesGroupValueHelp', element: 'SalesGroup' },  useAsTemplate: true}] - not yet C1 released
       @ObjectModel.foreignKey.association: '_SalesGroup'
       SalesGroup,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'C_SalesOfficeValueHelp', element: 'SalesOffice' },  useAsTemplate: true}] - not yet C1 released
       @ObjectModel.foreignKey.association: '_SalesOffice'
       SalesOffice,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_DivisionValueHelp', element: 'Division' },  useAsTemplate: true}] - not yet C1 released
       @ObjectModel.foreignKey.association: '_Division'
       Division,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_DistributionChannelValueHelp', element: 'DistributionChannel' },  useAsTemplate: true}]  - not yet C1 released
       @ObjectModel.foreignKey.association: '_DistributionChannel'
       DistributionChannel,
       //@Consumption.valueHelpDefinition:[{ entity: { name: 'I_SalesOrganizationStdVH', element: 'SalesOrganization' },  useAsTemplate: true}]
       @ObjectModel.foreignKey.association: '_SalesOrganization'
       SalesOrganization,
       ServiceDocCreationDateTime,
       ServiceDocChangedDateTime,
       ServiceDocumentCreatedByUser,
       ServiceDocumentChangedByUser,
       @Feature: 'BF:API_FULLSCOPE'
       @ObjectModel.sapObjectNodeTypeReference: 'EnterpriseServiceOrganization'
       EnterpriseServiceOrganization,
       ServiceDocumentTemplateType,
       SrvcDocTemplateSearchTermText,
       Language,
       // Status
       SrvcOrdTmplIsNew,
       SrvcOrdTmplIsInProcess,
       SrvcOrdTmplIsReleased,
       SrvcOrdTmplIsCompleted,
       // Associations
       _ServiceObjType,
       _ServiceDocumentType,
       _ServiceDocumentPriority,
       _SalesOrganizationOrgUnit_2,
       _SalesGroupOrgUnit_2,
       _SalesOfficeOrgUnit_2,
       _DistributionChannel,
       _Division,
       _SalesOffice,
       _SalesGroup,
       _SalesOrganization,
       _SrvcOrdTmplStatus,
       /* Compositions */
       _ServiceOrderTemplateItemTP   : redirected to composition child I_ServiceOrderTemplateItemTP,
       _SrvcOrdTmplReferenceObjectTP : redirected to composition child I_SrvcOrdTmplRefObjectTP,
       _SrvcOrdTmplUserStatusTP      : redirected to composition child I_SrvcOrdTmplUserStatusTP,
       _SrvcOrdTmplLongTextTP        : redirected to composition child I_SrvcOrdTmplLongTextTP,
       _SrvcOrdTmplAppointmentTP     : redirected to composition child I_SrvcOrdTmplAppointmentTP,
       _SrvcOrdTmplDurationTP        : redirected to composition child I_SrvcOrdTmplDurationTP,
       _SrvcOrdTmplPartnerTP         : redirected to composition child I_SrvcOrdTmplPartnerTP


}
```
