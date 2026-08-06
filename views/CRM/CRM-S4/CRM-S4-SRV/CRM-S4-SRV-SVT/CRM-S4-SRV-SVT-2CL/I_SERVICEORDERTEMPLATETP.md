---
name: I_SERVICEORDERTEMPLATETP
description: Service OrderTEMPLATETP
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| key `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceOrderTemplateType` | `ServiceOrderTemplateType` |
| `ServiceOrderTemplateUUID` | `ServiceOrderTemplateUUID` |
| `SrvcOrdTmplDescription` | `SrvcOrdTmplDescription` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `SrvcDocTmplValdtyStartDateTime` | `SrvcDocTmplValdtyStartDateTime` |
| `SrvcDocTmplValdtyEndDateTime` | `SrvcDocTmplValdtyEndDateTime` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesGroup` | `SalesGroup` |
| `SalesOffice` | `SalesOffice` |
| `Division` | `Division` |
| `DistributionChannel` | `DistributionChannel` |
| `SalesOrganization` | `SalesOrganization` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `EnterpriseServiceOrganization` | `EnterpriseServiceOrganization` |
| `ServiceDocumentTemplateType` | `ServiceDocumentTemplateType` |
| `SrvcDocTemplateSearchTermText` | `SrvcDocTemplateSearchTermText` |
| `Language` | `Language` |
| `SrvcOrdTmplIsNew` | `SrvcOrdTmplIsNew` |
| `SrvcOrdTmplIsInProcess` | `SrvcOrdTmplIsInProcess` |
| `SrvcOrdTmplIsReleased` | `SrvcOrdTmplIsReleased` |
| `SrvcOrdTmplIsCompleted` | `SrvcOrdTmplIsCompleted` |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SrvcOrdTmplStatus` | *Association* |
| `_ServiceOrderTemplateItemTP` | *Association* |
| `_SrvcOrdTmplReferenceObjectTP` | *Association* |
| `_SrvcOrdTmplUserStatusTP` | *Association* |
| `_SrvcOrdTmplLongTextTP` | *Association* |
| `_SrvcOrdTmplAppointmentTP` | *Association* |
| `_SrvcOrdTmplDurationTP` | *Association* |
| `_SrvcOrdTmplPartnerTP` | *Association* |

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
