---
name: I_INHOUSEREPAIR
description: "In-House Service"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value
semantic_en: "In-House Service"
semantic_vi: "In-House Service — CDS view cơ bản (transactional data) dựa trên crms4d_repa_h."
keywords:
  - "In-House Service"
  - "house"
  - "service"
  - "cust"
  - "mgmt"
  - "object"
  - "type"
  - "repair"
  - "char"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHOUSEREPAIR

**In-House Service**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `InHouseRepair` | ✓ | |  | `cast(object_id as crms4_repa_inhouse_repair_lbl preserving type )` | `CHAR(10)` | In-House Repair ID |
| `InHouseRepairUUID` |  | |  | `header_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `InHouseRepairCharUUID` |  | |  | `cast(header_guid_char as crms4_repa_object_guid32 preserving type)` | `CHAR(32)` | Object GUID in Character Format |
| `InhRepairType` |  | |  | `process_type` | `CHAR(4)` | Business Transaction Type |
| `PostingDate` |  | |  | `cast(posting_date as crms4_repa_created_on_lbl preserving type )` | `DATS(8)` | Created On |
| `CreationDateTime` |  | |  | `created_at_h` | `DEC(15)` | Created At |
| `CreatedByUser` |  | |  | `created_by_h` | `CHAR(12)` | User that Created the Transaction |
| `LastChangeDateTime` |  | |  | `changed_at_h` | `DEC(15)` | Changed At |
| `LastChangedByUser` |  | |  | `changed_by_h` | `CHAR(12)` | Transaction Last Changed By |
| `InhRepairStatus` |  | |  | `cast(stat_lifecycle as crms4_repa_status_lbl preserving type )` | `CHAR(4)` | In-House Repair Status |
| `InhRepairHasError` |  | |  | `stat_error` | `CHAR(1)` | Error Status |
| `InhRepairIsOpen` |  | |  | `stat_open` | `CHAR(1)` | Status "Open" |
| `SoldToParty` |  | |  | `sold_to_party` | `CHAR(10)` | Sold-To Party |
| `ContactPerson` |  | |  | `cast(contact_person as crms4_repa_contact_lbl preserving type )` | `CHAR(10)` | Contact Person |
| `ShipToParty` |  | |  | `ship_to_party` | `CHAR(10)` | Ship-To Party |
| `ResponsibleEmployee` |  | |  | `cast( person_resp as crms4_repa_resp_employee_lbl preserving type )` | `CHAR(10)` | Employee Responsible |
| `SalesOrganization` |  | |  | `sales_org_sd` | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  | `sales_office_sd` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  | `sales_group_sd` | `CHAR(3)` | Sales Group |
| `SalesOrganizationOrgUnitID` |  | |  | `cast( sales_org as crms4_repa_sales_org_naid_lbl2 preserving type )` | `CHAR(14)` | Sales Organization |
| `SalesOfficeOrgUnitID` |  | |  | `sales_office` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  | `sales_group` | `CHAR(14)` | Sales Group |
| `ResponsibleSalesOrganization` |  | |  | `cast( sales_org_resp as crms4_repa_sales_org_un_id_lbl preserving type )` | `CHAR(14)` | Sales Organization |
| `DistributionChannel` |  | |  | `dis_channel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `division` | `CHAR(2)` | Division |
| `ReferenceCustomerReturn` |  | |  | `ref_return_order` | `CHAR(10)` | Sales and Distribution Document Number |
| `RefRetsMgmtProcess` |  | |  | `ref_msr_id` | `CHAR(10)` | Process Identification Number |
| `_CustMgmtObjectType` | | ✓ | | | | |
| `_InhRepairType` | | ✓ | | | | |
| `_InhRepairStatus` | | ✓ | | | | |
| `_InhRepairHasError` | | ✓ | | | | |
| `_InhRepairIsOpen` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_ResponsibleSalesOrg` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ResponsibleSalesOrg_2` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_InHouseRepairItem` | | ✓ | | | | |
| `_RepairOrders` | | ✓ | | | | |
| `_RepairQuotation` | | ✓ | | | | |
| `_SrvcMgmtObjectStatus` | | ✓ | | | | |
| `_InhRepairStatusText` | | ✓ | | | | |
| `_PredecessorCustomerReturn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtObjectType` | `I_CustMgmtBusObjType` | [0..1] |
| `_InhRepairType` | `I_ServiceDocumentType` | [0..1] |
| `_InhRepairStatus` | `I_InhRepairStatus` | [0..1] |
| `_InhRepairHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_InhRepairIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_ResponsibleEmployee` | `I_BusinessPartner` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesOfficeOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_SalesGroupOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_ResponsibleSalesOrg` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_ResponsibleSalesOrg_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_InHouseRepairItem` | `I_InHouseRepairItem` | [0..*] |
| `_RepairOrders` | `I_InhRepairTransactionRelation` | [0..*] |
| `_RepairQuotation` | `I_InhRepairTransactionRelation` | [0..*] |
| `_SrvcMgmtObjectStatus` | `I_SrvcMgmtObjectStatus` | [0..1] |
| `_InhRepairStatusText` | `I_InhRepairStatusText` | [0..*] |
| `_PredecessorCustomerReturn` | `I_InhRepairTransactionRelation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIR')/$value)*

```abap
@EndUserText.label: 'In-House Service' //2602 CE Commented Repair
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_RepairOrders', '_RepairQuotation', '_PredecessorCustomerReturn']
}
@ObjectModel: {
  representativeKey: 'InHouseRepair',
  usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL},       // sizeCategory: #L - expected number of rows is < 10.000.000
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET] //Added 2602CE
}
@Analytics.technicalName: 'IINHOUSEREPAIR'
@Metadata: {
  ignorePropagatedAnnotations: true
}
/*+[hideWarning] { "IDS" : ["CALCULATED_FIELD_CHECK" ] }*/
define view entity I_InHouseRepair
  as select from crms4d_repa_h

  //association [0..1] to I_BusinessObjType              as _CustMgmtObjectType         on  $projection.CustMgmtObjectType = _CustMgmtObjectType.BusinessObjectType
  association [0..1] to I_CustMgmtBusObjType           as _CustMgmtObjectType         on  $projection.CustMgmtObjectType = _CustMgmtObjectType.BusinessObjectType
  
  association [0..1] to I_ServiceDocumentType          as _InhRepairType              on  $projection.InhRepairType = _InhRepairType.ServiceDocumentType

  association [0..1] to I_InhRepairStatus              as _InhRepairStatus            on  $projection.InhRepairStatus = _InhRepairStatus.InhRepairStatus
  association [0..1] to I_ServiceDocErrorStatus        as _InhRepairHasError          on  $projection.InhRepairHasError = _InhRepairHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus         as _InhRepairIsOpen            on  $projection.InhRepairIsOpen = _InhRepairIsOpen.ServiceDocumentIsOpen

  association [0..1] to I_BusinessPartner              as _SoldToParty                on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner              as _ContactPerson              on  $projection.ContactPerson = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner              as _ShipToParty                on  $projection.ShipToParty = _ShipToParty.BusinessPartner
  association [0..1] to I_BusinessPartner              as _ResponsibleEmployee        on  $projection.ResponsibleEmployee = _ResponsibleEmployee.BusinessPartner

  //SD Sales Org. Unit
  association [0..1] to I_SalesOrganization            as _SalesOrganization          on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  //CRM Sales Org. Unit
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SalesOrganizationUnit        as _SalesOrganizationOrgUnit   on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit.OrgUnitTypeIDConcatenated
                                                                                      and _SalesOrganizationOrgUnit.StartDate    <= $session.system_date
                                                                                      and _SalesOrganizationOrgUnit.EndDate      >= $session.system_date

  //SD Sales Office
  association [0..1] to I_SalesOffice                  as _SalesOffice                on  $projection.SalesOffice = _SalesOffice.SalesOffice
  //CRM Sales Office
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SalesOrganizationUnit        as _SalesOfficeOrgUnit         on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit.OrgUnitTypeIDConcatenated
                                                                                      and _SalesOfficeOrgUnit.StartDate    <= $session.system_date
                                                                                      and _SalesOfficeOrgUnit.EndDate      >= $session.system_date

  //SD Sales Group
  association [0..1] to I_SalesGroup                   as _SalesGroup                 on  $projection.SalesGroup = _SalesGroup.SalesGroup
  //CRM Sales Group
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SalesOrganizationUnit        as _SalesGroupOrgUnit          on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit.OrgUnitTypeIDConcatenated
                                                                                      and _SalesGroupOrgUnit.StartDate    <= $session.system_date
                                                                                      and _SalesGroupOrgUnit.EndDate      >= $session.system_date

  //CRM Responsible Sales Org.
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SalesOrganizationUnit        as _ResponsibleSalesOrg        on  $projection.ResponsibleSalesOrganization = _ResponsibleSalesOrg.OrgUnitTypeIDConcatenated
                                                                                      and _ResponsibleSalesOrg.StartDate           <= $session.system_date
                                                                                      and _ResponsibleSalesOrg.EndDate             >= $session.system_date
  //Added to correct the CRM Organizational Unit
  association [0..1] to I_SrvcMgmtOrganizationUnit     as _SalesOrganizationOrgUnit_2 on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit     as _SalesOfficeOrgUnit_2       on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit     as _SalesGroupOrgUnit_2        on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit     as _ResponsibleSalesOrg_2      on  $projection.ResponsibleSalesOrganization = _ResponsibleSalesOrg_2.OrgUnitTypeIDConcatenated
  //

  //CRM + SD Distribution Channel and Division
  association [0..1] to I_DistributionChannel          as _DistributionChannel        on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                     as _Division                   on  $projection.Division = _Division.Division


  association [0..*] to I_InHouseRepairItem            as _InHouseRepairItem          on  $projection.CustMgmtObjectType = _InHouseRepairItem.CustMgmtObjectType
                                                                                      and $projection.InHouseRepair      = _InHouseRepairItem.InHouseRepair

  association [0..*] to I_InhRepairTransactionRelation as _RepairOrders               on  $projection.InHouseRepairUUID               = _RepairOrders.CustMgmtPrdcssrTransactionUUID
                                                                                      and _RepairOrders.CustMgmtTransacRelationType   = 'IHR1'
                                                                                      and _RepairOrders.CustMgmtPrdcssrTransacObjType = 'BUS2000256' //In-House Repair

  association [0..*] to I_InhRepairTransactionRelation as _RepairQuotation            on  $projection.InHouseRepairUUID                  = _RepairQuotation.CustMgmtPrdcssrTransactionUUID
                                                                                      and _RepairQuotation.CustMgmtTransacRelationType   = 'IHR2'
                                                                                      and _RepairQuotation.CustMgmtPrdcssrTransacObjType = 'BUS2000256' //In-House Repair

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SrvcMgmtObjectStatus         as _SrvcMgmtObjectStatus       on  $projection.InHouseRepairUUID                        = _SrvcMgmtObjectStatus.SrvcMgmtObjectUUID

                                                                                      and _SrvcMgmtObjectStatus.SrvcMgmtObjectStatusIsInactive = ''
                                                                                      and (
                                                                                         _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus            = 'I1002'
                                                                                         or _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus         = 'I1003'
                                                                                         or _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus         = 'I1005'
                                                                                       )

  //text associations are no longer used in our projection views. therefore, we want to remove them.
  //but this association is still used in C1 released view ESH_N_INHOUSEREPAIR for our enterprise search modell
  //therefore, removal is not possible
  association [0..*] to I_InhRepairStatusText          as _InhRepairStatusText        on  $projection.InhRepairStatus = _InhRepairStatusText.InhRepairStatus

  //Return Order Changes
  association [0..1] to I_InhRepairTransactionRelation as _PredecessorCustomerReturn  on  $projection.InHouseRepairUUID                            = _PredecessorCustomerReturn.CustMgmtSuccssrTransactionUUID
                                                                                      and _PredecessorCustomerReturn.CustMgmtTransacRelationType   = 'VONA'
                                                                                      and _PredecessorCustomerReturn.CustMgmtPrdcssrTransacObjType = 'BUS2102'
{
      @ObjectModel.foreignKey.association: '_CustMgmtObjectType'
  key objtype_h                                                                as CustMgmtObjectType,
  key cast(object_id as crms4_repa_inhouse_repair_lbl preserving type )        as InHouseRepair,
      header_guid                                                              as InHouseRepairUUID,

      cast(header_guid_char as crms4_repa_object_guid32 preserving type)       as InHouseRepairCharUUID, //TODO: NOTES - Remove

      @ObjectModel.foreignKey.association: '_InhRepairType'
      process_type                                                             as InhRepairType,

      cast(posting_date as crms4_repa_created_on_lbl preserving type )         as PostingDate,

      created_at_h                                                             as CreationDateTime,
      created_by_h                                                             as CreatedByUser,
      changed_at_h                                                             as LastChangeDateTime,
      changed_by_h                                                             as LastChangedByUser,

      @ObjectModel.foreignKey.association: '_InhRepairStatus'
      cast(stat_lifecycle as crms4_repa_status_lbl preserving type )           as InhRepairStatus,

      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_InhRepairHasError'
      stat_error                                                               as InhRepairHasError,
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_InhRepairIsOpen'
      stat_open                                                                as InhRepairIsOpen,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                                            as SoldToParty,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast(contact_person as crms4_repa_contact_lbl preserving type )          as ContactPerson,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                                            as ShipToParty,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      cast( person_resp as crms4_repa_resp_employee_lbl preserving type )      as ResponsibleEmployee,

      //SD Sales Org. fields
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      sales_org_sd                                                             as SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      sales_office_sd                                                          as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      sales_group_sd                                                           as SalesGroup,

      //CRM Sales Org. fields
      //foreignKey definition not possible because primary key OrganizationalUnit of target view is not defined in association >> ATC error
      //@ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      cast( sales_org as crms4_repa_sales_org_naid_lbl2 preserving type )      as SalesOrganizationOrgUnitID,
      //foreignKey definition not possible because primary key OrganizationalUnit of target view is not defined in association >> ATC error
      //@ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      sales_office                                                             as SalesOfficeOrgUnitID,
      //foreignKey definition not possible because primary key OrganizationalUnit of target view is not defined in association >> ATC error
      //@ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      sales_group                                                              as SalesGroupOrgUnitID,
      //foreignKey definition not possible because primary key OrganizationalUnit of target view is not defined in association >> ATC error
      //@ObjectModel.foreignKey.association: '_ResponsibleSalesOrg'
      cast( sales_org_resp as crms4_repa_sales_org_un_id_lbl preserving type ) as ResponsibleSalesOrganization,

      //Distr. Channel and Division are same for CRM + SD Org.
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      dis_channel                                                              as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      division                                                                 as Division,
      ref_return_order                                                         as ReferenceCustomerReturn,
      ref_msr_id                                                               as RefRetsMgmtProcess,

      /* Associations */
      _CustMgmtObjectType,
      _InhRepairType,
      _InhRepairStatus,
      _InhRepairHasError,
      _InhRepairIsOpen,
      _SrvcMgmtObjectStatus,
      _SoldToParty,
      _ContactPerson,
      _ShipToParty,
      _ResponsibleEmployee,

      _SalesOrganization, //SD Sales Org.
      _SalesOffice, //SD Sales Office
      _SalesGroup, //SD Sales Group

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit, //CRM Sales Org.
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit, //CRM Sales Office
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit, //CRM Sales Group
      _SalesGroupOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ResponsibleSalesOrg_2'
      _ResponsibleSalesOrg, //CRM Responsible Sales Org.
      _ResponsibleSalesOrg_2,

      _DistributionChannel,
      _Division,

      _InHouseRepairItem,
      _RepairOrders,
      _RepairQuotation,

      //text associations are no longer used in our projection views. therefore, we want to remove them.
      //but this association is still used in C1 released view ESH_N_INHOUSEREPAIR for our enterprise search modell
      //therefore, removal is not possible
      _InhRepairStatusText,

      //Return Order Changes
      _PredecessorCustomerReturn
}
```
