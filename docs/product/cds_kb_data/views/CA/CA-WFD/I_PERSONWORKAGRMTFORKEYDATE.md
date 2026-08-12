---
name: I_PERSONWORKAGRMTFORKEYDATE
description: "This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)"
semantic_vi: "Person WorkAgreement Details for key date — CDS view giao diện dựa trên I_PersonWorkAgrmtOrglDetails."
keywords:
  - "person"
  - "workagreement"
  - "details"
  - "for"
  - "key"
  - "date"
  - "work"
  - "agreement"
  - "company"
  - "code"
  - "cost"
  - "center"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - plan
  - bo:salesorder
---
# I_PERSONWORKAGRMTFORKEYDATE

**This view provides the prerequisites for answering the following business questions: What is the details of a work agreement? (For example, Organizational Details, Status details, Planned working hours, Service cost level)**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  |  | `NUMC(8)` | Personnel Number |
| `KeyDate` |  | |  | `$parameters.P_KeyDate` | `DATS(8)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Job` |  | |  |  | `NUMC(8)` | Job |
| `PersonWorkAgrmtAuthznGrpg` |  | |  |  | `CHAR(14)` | Organizational Key |
| `OrganizationalUnit` |  | |  |  | `NUMC(8)` | Organizational Unit |
| `WorkAgreementStatus` |  | |  |  | `CHAR(1)` | Model S: Employment Status |
| `WorkingTimePercentage` |  | |  |  | `DEC(5)` | Employment percentage |
| `WeeklyWorkdays` |  | |  |  | `DEC(4)` | Weekly Workdays |
| `WeeklyWorkingHours` |  | |  |  | `DEC(5)` | Hours per week |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_PersonWorkAgrmtJobText` | | ✓ | | | | |
| `_OrganizationalUnitName` | | ✓ | | | | |
| `_PersonWorkAgrmtStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_CostCenter` | `I_CostCenter` | [1] |
| `_PersonWorkAgrmtJobText` | `I_PersonWorkAgrmtJobText` | [0..*] |
| `_OrganizationalUnitName` | `I_OrganizationalUnitText` | [0..*] |
| `_PersonWorkAgrmtStatusText` | `I_PersonWorkAgrmtStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTFORKEYDATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRKEYDATE'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Person WorkAgreement Details for key date'
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@AccessControl.privilegedAssociations:  [ '_PersonWorkAgrmtJobText', '_OrganizationalUnitName' , '_PersonWorkAgrmtStatusText' ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtForKeyDate
  with parameters
    @Consumption.hidden     : true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from    I_PersonWorkAgrmtOrglDetails   as OrgDetails

    inner join      I_PersonWorkAgrmtStatus        as StatusDetails    on  OrgDetails.PersonWorkAgreement = StatusDetails.PersonWorkAgreement
                                                                       and StatusDetails.StartDate        <= $parameters.P_KeyDate
                                                                       and StatusDetails.EndDate          >= $parameters.P_KeyDate
    left outer join I_PersonWorkAgrmtPlndWrkgTime  as WSDetails        on  OrgDetails.PersonWorkAgreement = WSDetails.PersonWorkAgreement
                                                                       and WSDetails.StartDate            <= $parameters.P_KeyDate
                                                                       and WSDetails.EndDate              >= $parameters.P_KeyDate
    left outer join I_PersonWorkAgrmtSrvcCostLevel as ServiceCostLevel on  OrgDetails.PersonWorkAgreement = ServiceCostLevel.PersonWorkAgreement
                                                                       and ServiceCostLevel.StartDate     <= $parameters.P_KeyDate
                                                                       and ServiceCostLevel.EndDate       >= $parameters.P_KeyDate
  association [1]    to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_CostCenter                as _CostCenter                on  $projection.CostCenter        = _CostCenter.CostCenter
                                                                                  and $projection.CompanyCode       = _CostCenter.CompanyCode
                                                                                  and _CostCenter.ValidityStartDate <= $parameters.P_KeyDate
                                                                                  and _CostCenter.ValidityEndDate   >= $parameters.P_KeyDate
  association [0..*] to I_PersonWorkAgrmtJobText    as _PersonWorkAgrmtJobText    on  $projection.Job                   = _PersonWorkAgrmtJobText.Job
                                                                                  and _PersonWorkAgrmtJobText.StartDate <= $parameters.P_KeyDate
                                                                                  and _PersonWorkAgrmtJobText.EndDate   >= $parameters.P_KeyDate
  association [0..*] to I_OrganizationalUnitText    as _OrganizationalUnitName    on  $projection.OrganizationalUnit    = _OrganizationalUnitName.OrganizationalUnit
                                                                                  and _OrganizationalUnitName.StartDate <= $parameters.P_KeyDate
                                                                                  and _OrganizationalUnitName.EndDate   >= $parameters.P_KeyDate
  association [0..*] to I_PersonWorkAgrmtStatusText as _PersonWorkAgrmtStatusText on  _PersonWorkAgrmtStatusText.WorkAgreementStatus = $projection.WorkAgreementStatus

{
  key OrgDetails.PersonWorkAgreement,
      $parameters.P_KeyDate                           as KeyDate,
      OrgDetails.CompanyCode,
      OrgDetails.CostCenter,
      OrgDetails.Job,
      OrgDetails.PersonWorkAgrmtAuthznGrpg,
      OrgDetails.OrganizationalUnit,
      StatusDetails.WorkAgreementStatus,
      WSDetails.WorkingTimePercentage,
      WSDetails.WeeklyWorkdays,
      WSDetails.WeeklyWorkingHours,
      ServiceCostLevel.ServiceCostLevel,
      _CompanyCode,
      _CostCenter,
      _PersonWorkAgrmtJobText,
      _OrganizationalUnitName,
      _PersonWorkAgrmtStatusText


}

where
      OrgDetails.StartDate <= $parameters.P_KeyDate
  and OrgDetails.EndDate   >= $parameters.P_KeyDate
```
