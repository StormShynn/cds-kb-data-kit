---
name: I_IAMSUPPORTUSERREQUESTLOG
description: Iamsupportuserrequestlog
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMSUPPORTUSERREQUESTLOG

**Iamsupportuserrequestlog**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAMSupportUserRequestUUID` | `_SupportUserRequestLog.UUID` |
| `CAMSuppUserValdtyStartDateTime` | `_SupportUserRequestLog.RequestedAt` |
| `CAMSupportUser` | `_SupportUserRequestLog.Bname` |
| `CAMSupportAccessLevel` | `_SupportUserRequestLog.AccessLevelID` |
| `CAMSupportAccessCategory` | `_SupportUserRequestLog.AccessCategory` |
| `CAMSupportAccessCategoryText` | `_AccessCategory.ddtext` |
| `CAMSuppAddedAuthorizationMode` | `_SupportUserRequestLog.AbaMode` |
| `CAMSuppAddedAuthznModeText` | `_AbaMode.ddtext` |
| `CAMSuppAddedAuthorizationUser` | `_SupportUserRequestLog.AbaBname` |
| `CAMSupportIncident` | `_SupportUserRequestLog.IncidentID` |
| `CAMSupportIncidentSystem` | `_SupportUserRequestLog.IncidentSystemType` |
| `CAMSupportIncidentSystemText` | `_IncidentSystemType.ddtext` |
| `CAMSupportIncidentSystemNumber` | `_SupportUserRequestLog.IncidentSystemNumber` |
| `CAMSupportIncidentTicketNumber` | `_SupportUserRequestLog.IncidentNumber` |
| `CAMSupportIncidentTicketYear` | `_SupportUserRequestLog.IncidentYear` |
| `CAMSuppUserValdtyEndDateTime` | `_SupportUserRequestLog.ValidTo` |
| `_SupportUser` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupportUser` | `I_User` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Support User Request Log'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.privilegedAssociations: [ '_SupportUser' ]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #A,
  sizeCategory: #S
}

// The following components of the underlying private view are not exposed in the consumption view:
// RequestedBy: SAP internal technical users for automated system operation
// RequestId: is always empty
// AccessType: SAP internal fixed values used in P_ view to calculate AccessCategory
// IncidentSrc: SAP internal source data used in CL_APS_IAM_SUSR_INC_PARSER to determine IncidentType
// IncidentType: SAP internal classification used in P_ view to calculate AccessCategory

define view entity I_IAMSupportUserRequestLog
  as select from    P_IAMSUPPORTUSERLOG as _SupportUserRequestLog

  // Texts for Access Categories
    left outer join dd07t               as _AccessCategory     on  _AccessCategory.domname    = 'APS_IAM_SUSR_ACCESS_CATEGORY'
                                                               and _AccessCategory.domvalue_l = _SupportUserRequestLog.AccessCategory
                                                               and _AccessCategory.ddlanguage = $session.system_language

  // Texts for Additional Business Authorization Modes
    left outer join dd07t               as _AbaMode            on  _AbaMode.domname    = 'APS_IAM_SUSR_ABA_MODE'
                                                               and _AbaMode.domvalue_l = _SupportUserRequestLog.AbaMode
                                                               and _AbaMode.ddlanguage = $session.system_language

  // Texts for Incident System Types
    left outer join dd07t               as _IncidentSystemType on  _IncidentSystemType.domname    = 'APS_IAM_SUSR_INCIDENT_SYS_TYPE'
                                                               and _IncidentSystemType.domvalue_l = _SupportUserRequestLog.IncidentSystemType
                                                               and _IncidentSystemType.ddlanguage = $session.system_language

  association [0..1] to I_User as _SupportUser on $projection.CAMSupportUser = _SupportUser.UserID

{
  key _SupportUserRequestLog.UUID                 as CAMSupportUserRequestUUID,
      _SupportUserRequestLog.RequestedAt          as CAMSuppUserValdtyStartDateTime,
      _SupportUserRequestLog.Bname                as CAMSupportUser,
      _SupportUserRequestLog.AccessLevelID        as CAMSupportAccessLevel,
      _SupportUserRequestLog.AccessCategory       as CAMSupportAccessCategory,
      _AccessCategory.ddtext                      as CAMSupportAccessCategoryText,
      _SupportUserRequestLog.AbaMode              as CAMSuppAddedAuthorizationMode,
      _AbaMode.ddtext                             as CAMSuppAddedAuthznModeText,
      _SupportUserRequestLog.AbaBname             as CAMSuppAddedAuthorizationUser,
      _SupportUserRequestLog.IncidentID           as CAMSupportIncident,
      _SupportUserRequestLog.IncidentSystemType   as CAMSupportIncidentSystem,
      _IncidentSystemType.ddtext                  as CAMSupportIncidentSystemText,
      _SupportUserRequestLog.IncidentSystemNumber as CAMSupportIncidentSystemNumber,
      _SupportUserRequestLog.IncidentNumber       as CAMSupportIncidentTicketNumber,
      _SupportUserRequestLog.IncidentYear         as CAMSupportIncidentTicketYear,
      _SupportUserRequestLog.ValidTo              as CAMSuppUserValdtyEndDateTime,
      _SupportUser
}
where
  // This person related data is provided for the purpose of auditing support access before financial year end closing.
  // Log entries older than 366 days are not returned.
      tstmp_is_valid( _SupportUserRequestLog.ValidTo ) =  1
  and tstmp_seconds_between(
        _SupportUserRequestLog.ValidTo, tstmp_current_utctimestamp(), 'FAIL'
      )                                                <= 31622400
```
