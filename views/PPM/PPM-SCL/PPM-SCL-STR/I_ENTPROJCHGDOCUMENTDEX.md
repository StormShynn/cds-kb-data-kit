---
name: I_ENTPROJCHGDOCUMENTDEX
description: Entprojchgdocumentdex
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
  - data-extraction
  - document
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJCHGDOCUMENTDEX

**Entprojchgdocumentdex**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `DatabaseTable` | ✓ | |  |  |  |  |
| `ChangeDocTableKey` | ✓ | |  |  |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |  |  |
| `ChangeDocGlobalFieldName` |  | |  | `case when ChangeDocDatabaseTableField = 'KEY' then cast('Key'as fieldname ) when ChangeDocDatabaseTableField = 'OBJECT_TYPE' then cast('ObjectType'as fieldname ) when ChangeDocDatabaseTableField = 'CAUSE' then cast('ProjectReasonCode'as fieldname ) when ChangeDocDatabaseTableField = 'LOCATION' then cast('Location'as fieldname ) when ChangeDocDatabaseTableField = 'PRART' then cast('EnterpriseProjectType'as fieldname ) when ChangeDocDatabaseTableField = 'PROJECTUUID' then cast('ProjectUUID'as fieldname ) when ChangeDocDatabaseTableField = 'KALSM' then cast('CostingSheet'as fieldname ) when ChangeDocDatabaseTableField = 'PLVAR' then cast('PlanVersion'as fieldname ) when ChangeDocDatabaseTableField = 'FORECAST_START_DATE' then cast(' ForecastedStartDate'as fieldname ) when ChangeDocDatabaseTableField = 'FORECAST_FINISH_DATE' then cast('ForecastedFinishDate'as fieldname ) when ChangeDocDatabaseTableField = 'RESP_ORG_UNIT' then cast('OrganizationalUnit'as fieldname ) when ChangeDocDatabaseTableField = 'RELEASED_ON' then cast('ReleaseDateTime'as fieldname ) when ChangeDocDatabaseTableField = 'SETTLEMENTELEMENT' then cast('EntProjectSettlementElement'as fieldname ) when ChangeDocDatabaseTableField = 'APP_RELEVANT' then cast('IsApprovalRelevant'as fieldname ) when ChangeDocDatabaseTableField = 'CALENDAR_ID' then cast('FactoryCalendar'as fieldname ) when ChangeDocDatabaseTableField = 'XSTAT' then cast('WBSIsStatisticalWBSElement'as fieldname ) when ChangeDocDatabaseTableField = 'SORT_NUMBER' then cast('SortingNumber'as fieldname ) when ChangeDocDatabaseTableField = 'SETTLEMENTTYPE' then cast('EntProjectSettlementType'as fieldname ) when ChangeDocDatabaseTableField = 'PROC_STATUS_SUP' then cast('TaskParentProcessingStatus'as fieldname ) when ChangeDocDatabaseTableField = 'JV_VNAME' then cast('JointVenture'as fieldname ) when ChangeDocDatabaseTableField = 'FUNCTION_ID' then cast('EntProjElementFunctionID'as fieldname ) when ChangeDocDatabaseTableField = 'IS_BLOCKED' then cast('BlockFunctionStatusIsBlocked'as fieldname ) when ChangeDocDatabaseTableField = 'ROLE_GUID' then cast('ProjectRoleUUID'as fieldname ) when ChangeDocDatabaseTableField = 'TEAM_MEMBER_GUID' then cast('TeamMemberUUID'as fieldname ) when ChangeDocDatabaseTableField = 'ROLE_CATEGORY' then cast('ProjectRoleCategory'as fieldname ) when ChangeDocDatabaseTableField = 'ROLE_NAME' then cast('ProjectRoleName'as fieldname ) when ChangeDocDatabaseTableField = 'ROLE_TYPE' then cast('ProjectRoleType'as fieldname ) when ChangeDocDatabaseTableField = 'BUPA_GUID' then cast('BusinessPartnerUUID'as fieldname ) when ChangeDocDatabaseTableField = 'JV_RECID' then cast('JointVentureCostRecoveryCode'as fieldname ) when ChangeDocDatabaseTableField = 'JV_ETYPE' then cast('JointVentureEquityType'as fieldname ) when ChangeDocDatabaseTableField = 'JV_OTYPE' then cast('JointVentureObjType'as fieldname ) when ChangeDocDatabaseTableField = 'JV_JIBCL' then cast('JointVentureClass'as fieldname ) when ChangeDocDatabaseTableField = 'JV_JIBSA' then cast('JointVentureSubClass'as fieldname ) when ChangeDocDatabaseTableField = 'RFUND' then cast('Fund'as fieldname ) when ChangeDocDatabaseTableField = 'RGRANT_NBR' then cast('GrantID'as fieldname ) when ChangeDocDatabaseTableField = 'FUND_FIX_ASSIGN' then cast('FundIsFixAssigned'as fieldname ) when ChangeDocDatabaseTableField = 'GRANT_FIX_ASSIGNED' then cast(' GrantIsFixAssigned'as fieldname ) when ChangeDocDatabaseTableField = 'FUNC_AREA_FIX_ASSIGNED' then cast('FunctionalAreaIsFixAssigned'as fieldname ) when ChangeDocDatabaseTableField = 'SPONSOREDPROG' then cast('SponsoredProgram'as fieldname ) when ChangeDocDatabaseTableField = 'MILESTONE' then cast('IsProjectMilestone'as fieldname ) when ChangeDocDatabaseTableField = 'MLSTN_APPRVL_STATUS' then cast('MilestoneApprovalStatus'as fieldname ) when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKUUID' then cast('EntProjectObjectLinkUUID'as fieldname ) when ( DatabaseTable = '/S4PPM/PSTASK_CD' ) then case when ChangeDocDatabaseTableField = 'CONFIDENTIAL' then cast('EntProjectIsConfidential'as fieldname ) when ChangeDocDatabaseTableField = 'FABKL' then cast('FactoryCalendar'as fieldname ) when ChangeDocDatabaseTableField = 'PBUKR' then FieldmapEl.EntPrjChgDocFldDet when ChangeDocDatabaseTableField = 'PKOKR' then FieldmapEl.EntPrjChgDocFldDet when ChangeDocDatabaseTableField = 'POST1' then cast('ProjectDescription'as fieldname ) when ChangeDocDatabaseTableField = 'PROJECTINTERNALID' then cast('ProjectInternalID'as fieldname ) when ChangeDocDatabaseTableField = 'TASK_GUID' then cast('ProjectElementUUID'as fieldname ) when ChangeDocDatabaseTableField = 'TASK_TYPE' then cast('EntProjectElementType'as fieldname ) when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID' then cast('WBSElementInternalID'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE' then cast('FinishConstraintDate'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE' then cast('StartConstraintDate'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE' then cast('StartConstraintType'as fieldname ) when ChangeDocDatabaseTableField = 'DURATION' then cast('ProjectElementDuration'as fieldname ) when ChangeDocDatabaseTableField = 'DURATION_UNIT' then cast('DurationUnit'as fieldname ) when ChangeDocDatabaseTableField = 'MASTER_LANGUAGE' then cast('MasterLanguage'as fieldname ) when ChangeDocDatabaseTableField = 'TEMPLATE_GUID' then cast('ProjectTemplateUUID'as fieldname ) else FieldmapH.EntPrjChgDocFldDet end when ( DatabaseTable = '/S4PPM/PRJELM_CD' ) then case when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID' then cast('WBSElementInternalID'as fieldname ) when ChangeDocDatabaseTableField = 'PLANFINISH_DATE' then cast('PlannedEndDate'as fieldname ) when ChangeDocDatabaseTableField = 'PLANSTART_DATE' then cast('PlannedStartDate'as fieldname ) when ChangeDocDatabaseTableField = 'TASK_GUID' then cast('ProjectElementUUID'as fieldname ) when ChangeDocDatabaseTableField = 'POST1' then cast('WBSDescription'as fieldname ) when ChangeDocDatabaseTableField = 'MULTI_SOI_ENABLED' then cast('EntProjIsMultiSlsOrdItmsEnbld'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE' then cast('FinishConstraintDate'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE' then cast('StartConstraintDate'as fieldname ) when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE' then cast('StartConstraintType'as fieldname ) when ChangeDocDatabaseTableField = 'DURATION' then cast('ProjectElementDuration'as fieldname ) when ChangeDocDatabaseTableField = 'DURATION_UNIT' then cast('DurationUnit'as fieldname ) when ChangeDocDatabaseTableField = 'CALENDAR_ID' then cast('FactoryCalendar'as fieldname ) else FieldmapEl.EntPrjChgDocFldDet end when ( DatabaseTable = '/S4PPM/OBJLINK') then case when ChangeDocDatabaseTableField = 'PROJECTELEMENTUUID' then cast('ProjectElementUUID'as fieldname ) when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKTYPE' then cast('EntProjectObjectLinkType'as fieldname ) when ChangeDocDatabaseTableField = 'REFERENCEDOBJECTUUID' then cast('ReferencedObjectUUID'as fieldname ) when ChangeDocDatabaseTableField = 'CREATEDBYUSER' then cast('CreatedByUser'as fieldname ) when ChangeDocDatabaseTableField = 'CREATIONDATETIME' then cast('CreationDateTime'as fieldname ) when ChangeDocDatabaseTableField = 'LASTCHANGEDBYUSER' then cast('LastChangedByUser'as fieldname ) when ChangeDocDatabaseTableField = 'LASTCHANGEDDATETIME' then cast('LastChangeDateTime'as fieldname ) end when ( DatabaseTable = '/S4PPM/SOLOLINK') then case when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDER' then cast('BusinessSolutionOrder'as fieldname ) when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDERITEM' then cast('BusinessSolutionOrderItem'as fieldname ) end when ( DatabaseTable = '/S4PPM/STAT_AREA') then case when ChangeDocDatabaseTableField = 'GUID' then cast('Guid'as fieldname ) when ChangeDocDatabaseTableField = 'PROJECT_GUID' then cast('ProjectUUID'as fieldname ) when ChangeDocDatabaseTableField = 'STATUSAREA' then cast('StatusArea'as fieldname ) when ChangeDocDatabaseTableField = 'STATUS' then cast('Status'as fieldname ) when ChangeDocDatabaseTableField = 'TREND' then cast('StatusTrend'as fieldname ) end when ( DatabaseTable = '/S4PPM/HIERARCHY') then case when ChangeDocDatabaseTableField = 'OBJECT_GUID' then cast('ReferencedObjectUUID'as fieldname ) else FieldmapEl.EntPrjChgDocFldDet end else ChangeDocDatabaseTableField end` |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ProjectCategory` |  | |  | `EnterpriseProject .ProjectCategory` |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |  |  |
| `ChangeDocNewUnit` |  | |  |  |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |  |  |
| `ChangeDocNewCurrency` |  | |  |  |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |  |  |
| `ChangeDocTextIsChanged` |  | |  |  |  |  |
| `CreationDate` |  | | `_ChangeDocument` | `CreationDate` |  |  |
| `CreationTime` |  | | `_ChangeDocument` | `CreationTime` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeDocument` | `I_ChangeDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IENTPRJCHGDOC'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Data Extraction for Project Change Document'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{
    authorizationCheck:#PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]


@VDM.viewType: #COMPOSITE

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'cdpos', role:#MAIN,
                    viewElement: ['ChangeDocObject', 'ChangeDocObjectClass', 'ChangeDocument', 'DatabaseTable', 'ChangeDocTableKey', 'ChangeDocDatabaseTableField', 'ChangeDocItemChangeType'],
                    tableElement: ['objectid', 'objectclas', 'changenr', 'tabname', 'tabkey', 'fname', 'chngind' ]
                },
                {
                    table: '/s4ppm/project', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ProjectUUID'],
                    tableElement: ['guid']
                 },
                 {
                    table: 'cdhdr', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ChangeDocObjectClass', 'ChangeDocObject', 'ChangeDocument'],
                    tableElement: ['objectclas', 'objectid', 'changenr']
                 }
            ]
        }
    }
 }
 @ObjectModel.sapObjectNodeType.name: 'EnterpriseProject'
 

define view I_EntProjChgDocumentDEX as select from   I_ChangeDocumentItem as ChangeItem
    left outer to one join I_EntProjFieldMapChgDoc     as FieldmapH on  FieldmapH.EntProjChgDocStrucName  = 'PROJ'
                                                                      and FieldmapH.EntProjChgDocFld = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapH.EntProjChgDocObj = 'I_ENTERPRISEPROJECT' 
     
                                                                         
      left outer to one join I_EntProjFieldMapChgDoc     as FieldmapEl on  FieldmapEl.EntProjChgDocStrucName = 'TASK'
                                                                      and FieldmapEl.EntProjChgDocFld = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapEl.EntProjChgDocObj  = 'I_ENTERPRISEPROJECTELEMENT'                                                                                                                                          
   left outer to one join R_EnterpriseProject as EnterpriseProject   
          on ChangeItem.ChangeDocObject = EnterpriseProject.EntProjectChangeDocument
 association [0..1] to I_ChangeDocument              as _ChangeDocument              on  $projection.ChangeDocObjectClass = _ChangeDocument.ChangeDocObjectClass
                                                                                      and $projection.ChangeDocObject      = _ChangeDocument.ChangeDocObject
                                                                                      and $projection.ChangeDocument       = _ChangeDocument.ChangeDocument 
                                                                                
{
      @Consumption.hidden
  key ChangeDocObject,
      @Consumption.hidden
  key ChangeDocObjectClass,
      @Consumption.hidden
  key ChangeDocument,
      @Consumption.hidden
  key DatabaseTable,
      @Consumption.hidden
  key ChangeDocTableKey,
      @Consumption.hidden
  key ChangeDocDatabaseTableField,

  key ChangeDocItemChangeType,
    case
      when  ChangeDocDatabaseTableField = 'KEY'
      then
      cast('Key'as fieldname )
       when  ChangeDocDatabaseTableField = 'OBJECT_TYPE'
      then
      cast('ObjectType'as fieldname )
              when  ChangeDocDatabaseTableField = 'CAUSE'
      then
      cast('ProjectReasonCode'as fieldname )
       when  ChangeDocDatabaseTableField = 'LOCATION'
      then
      cast('Location'as fieldname )
       when  ChangeDocDatabaseTableField = 'PRART'
      then
      cast('EnterpriseProjectType'as fieldname )
       when ChangeDocDatabaseTableField = 'PROJECTUUID'
      then
       cast('ProjectUUID'as fieldname )
      when  ChangeDocDatabaseTableField = 'KALSM'
      then
      cast('CostingSheet'as fieldname )
       when  ChangeDocDatabaseTableField = 'PLVAR'
      then
      cast('PlanVersion'as fieldname )
       when  ChangeDocDatabaseTableField = 'FORECAST_START_DATE'
      then
      cast(' ForecastedStartDate'as fieldname )
       when  ChangeDocDatabaseTableField = 'FORECAST_FINISH_DATE'
      then
      cast('ForecastedFinishDate'as fieldname )
       when  ChangeDocDatabaseTableField = 'RESP_ORG_UNIT'
      then
      cast('OrganizationalUnit'as fieldname )
       when  ChangeDocDatabaseTableField = 'RELEASED_ON'
      then
      cast('ReleaseDateTime'as fieldname )
       when  ChangeDocDatabaseTableField = 'SETTLEMENTELEMENT'
      then
      cast('EntProjectSettlementElement'as fieldname )
       when  ChangeDocDatabaseTableField = 'APP_RELEVANT'
      then
      cast('IsApprovalRelevant'as fieldname )
       when  ChangeDocDatabaseTableField = 'CALENDAR_ID'
      then
      cast('FactoryCalendar'as fieldname )
       when  ChangeDocDatabaseTableField = 'XSTAT'
      then
      cast('WBSIsStatisticalWBSElement'as fieldname )
      when  ChangeDocDatabaseTableField = 'SORT_NUMBER'
      then
      cast('SortingNumber'as fieldname )
       when  ChangeDocDatabaseTableField = 'SETTLEMENTTYPE'
      then
      cast('EntProjectSettlementType'as fieldname )
       when  ChangeDocDatabaseTableField = 'PROC_STATUS_SUP'
      then
      cast('TaskParentProcessingStatus'as fieldname )
      //Catg 6 common fields for pst and wp
       when  ChangeDocDatabaseTableField = 'JV_VNAME'
      then
      cast('JointVenture'as fieldname )
      //Block Function
       when ChangeDocDatabaseTableField = 'FUNCTION_ID'
      then
       cast('EntProjElementFunctionID'as fieldname )
         when ChangeDocDatabaseTableField = 'IS_BLOCKED'
      then
       cast('BlockFunctionStatusIsBlocked'as fieldname )
       //entitlement
             when ChangeDocDatabaseTableField = 'ROLE_GUID'
      then
       cast('ProjectRoleUUID'as fieldname )  
        when ChangeDocDatabaseTableField = 'TEAM_MEMBER_GUID'
      then
       cast('TeamMemberUUID'as fieldname )  
       //Roles
       when ChangeDocDatabaseTableField = 'ROLE_CATEGORY'
      then
       cast('ProjectRoleCategory'as fieldname )
           when ChangeDocDatabaseTableField = 'ROLE_NAME'
      then
       cast('ProjectRoleName'as fieldname )
        when ChangeDocDatabaseTableField = 'ROLE_TYPE'
      then
       cast('ProjectRoleType'as fieldname )
      //Team member
      when ChangeDocDatabaseTableField = 'BUPA_GUID'
      then
       cast('BusinessPartnerUUID'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_RECID'
      then
      cast('JointVentureCostRecoveryCode'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_ETYPE'
      then
      cast('JointVentureEquityType'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_OTYPE'
      then
      cast('JointVentureObjType'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_JIBCL'
      then
      cast('JointVentureClass'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_JIBSA'
      then
      cast('JointVentureSubClass'as fieldname )
       when  ChangeDocDatabaseTableField = 'RFUND'
      then
      cast('Fund'as fieldname )
       when  ChangeDocDatabaseTableField = 'RGRANT_NBR'
      then
      cast('GrantID'as fieldname )
       when  ChangeDocDatabaseTableField = 'FUND_FIX_ASSIGN'
      then
      cast('FundIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'GRANT_FIX_ASSIGNED'
      then
      cast(' GrantIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'FUNC_AREA_FIX_ASSIGNED'
      then
      cast('FunctionalAreaIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'SPONSOREDPROG'
      then
      cast('SponsoredProgram'as fieldname )
      //Milestone
       when  ChangeDocDatabaseTableField = 'MILESTONE'
      then
      cast('IsProjectMilestone'as fieldname )
       when  ChangeDocDatabaseTableField = 'MLSTN_APPRVL_STATUS'
      then
      cast('MilestoneApprovalStatus'as fieldname )
      when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKUUID'
      then
       cast('EntProjectObjectLinkUUID'as fieldname )
      //Project header
      
      when ( DatabaseTable = '/S4PPM/PSTASK_CD' )
      then
      case
      when ChangeDocDatabaseTableField = 'CONFIDENTIAL'
      then
       cast('EntProjectIsConfidential'as fieldname )
       when ChangeDocDatabaseTableField = 'FABKL'
      then
       cast('FactoryCalendar'as fieldname )
       when ChangeDocDatabaseTableField = 'PBUKR'
      then
       FieldmapEl.EntPrjChgDocFldDet
     //  cast('CompanyCode'as fieldname )
       when ChangeDocDatabaseTableField = 'PKOKR'
      then
       FieldmapEl.EntPrjChgDocFldDet
       //cast('ControllingArea'as fieldname )
        when ChangeDocDatabaseTableField = 'POST1'
      then
       cast('ProjectDescription'as fieldname )
        when ChangeDocDatabaseTableField = 'PROJECTINTERNALID'
      then
       cast('ProjectInternalID'as fieldname )
        when ChangeDocDatabaseTableField = 'TASK_GUID'
      then
       cast('ProjectElementUUID'as fieldname )
        when ChangeDocDatabaseTableField = 'TASK_TYPE'
      then
       cast('EntProjectElementType'as fieldname )
        when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'
      then
       cast('WBSElementInternalID'as fieldname )
       //Catg 6
             when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'
      then
       cast('FinishConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'
      then
       cast('StartConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'
      then
       cast('StartConstraintType'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION'
      then
       cast('ProjectElementDuration'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION_UNIT'
      then
       cast('DurationUnit'as fieldname )
          when ChangeDocDatabaseTableField = 'MASTER_LANGUAGE'
      then
       cast('MasterLanguage'as fieldname )
             when ChangeDocDatabaseTableField = 'TEMPLATE_GUID'
      then
       cast('ProjectTemplateUUID'as fieldname )
      else
         FieldmapH.EntPrjChgDocFldDet
         end
         // Workpackage
      when ( DatabaseTable = '/S4PPM/PRJELM_CD' )
      then
     case
     when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'
      then
       cast('WBSElementInternalID'as fieldname )
            when ChangeDocDatabaseTableField = 'PLANFINISH_DATE'
      then
       cast('PlannedEndDate'as fieldname )
            when ChangeDocDatabaseTableField = 'PLANSTART_DATE'
      then
       cast('PlannedStartDate'as fieldname )
            when ChangeDocDatabaseTableField = 'TASK_GUID'
      then
       cast('ProjectElementUUID'as fieldname )
            when ChangeDocDatabaseTableField = 'POST1'
      then
       cast('WBSDescription'as fieldname )
        //Cat6
         when ChangeDocDatabaseTableField = 'MULTI_SOI_ENABLED'
      then
       cast('EntProjIsMultiSlsOrdItmsEnbld'as fieldname )
              
             when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'
      then
       cast('FinishConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'
      then
       cast('StartConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'
      then
       cast('StartConstraintType'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION'
      then
       cast('ProjectElementDuration'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION_UNIT'
      then
       cast('DurationUnit'as fieldname )
             when ChangeDocDatabaseTableField = 'CALENDAR_ID'
      then
       cast('FactoryCalendar'as fieldname )
      else
       FieldmapEl.EntPrjChgDocFldDet
       end
  
           //Object Link  
      when ( DatabaseTable = '/S4PPM/OBJLINK')
   then   
      case 
           when ChangeDocDatabaseTableField = 'PROJECTELEMENTUUID'
      then
       cast('ProjectElementUUID'as fieldname )
           when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKTYPE'
      then
       cast('EntProjectObjectLinkType'as fieldname )
           when ChangeDocDatabaseTableField = 'REFERENCEDOBJECTUUID'
      then
       cast('ReferencedObjectUUID'as fieldname )
         when ChangeDocDatabaseTableField = 'CREATEDBYUSER'
      then
       cast('CreatedByUser'as fieldname )
         when ChangeDocDatabaseTableField = 'CREATIONDATETIME'
      then
       cast('CreationDateTime'as fieldname )
         when ChangeDocDatabaseTableField = 'LASTCHANGEDBYUSER'
      then
       cast('LastChangedByUser'as fieldname )
         when ChangeDocDatabaseTableField = 'LASTCHANGEDDATETIME'
      then
       cast('LastChangeDateTime'as fieldname )
       end
           //Solo link
      when ( DatabaseTable = '/S4PPM/SOLOLINK')
   then   
      case 
         when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDER'
      then
       cast('BusinessSolutionOrder'as fieldname )
         when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDERITEM'
      then
       cast('BusinessSolutionOrderItem'as fieldname )
       end
           //Status Area   
      when ( DatabaseTable = '/S4PPM/STAT_AREA')
   then   
       case 
             when ChangeDocDatabaseTableField = 'GUID'
      then
       cast('Guid'as fieldname )
           when ChangeDocDatabaseTableField = 'PROJECT_GUID'
      then
       cast('ProjectUUID'as fieldname )
           when ChangeDocDatabaseTableField = 'STATUSAREA'
      then
       cast('StatusArea'as fieldname )
           when ChangeDocDatabaseTableField = 'STATUS'
      then
       cast('Status'as fieldname )
           when ChangeDocDatabaseTableField = 'TREND'
      then
       cast('StatusTrend'as fieldname )
       end
      //Hierrarchy
           when ( DatabaseTable = '/S4PPM/HIERARCHY')
   then
      case 
             when ChangeDocDatabaseTableField = 'OBJECT_GUID'
      then
       cast('ReferencedObjectUUID'as fieldname )
       
       else
      FieldmapEl.EntPrjChgDocFldDet
      end

      else
      ChangeDocDatabaseTableField end as ChangeDocGlobalFieldName,
      @Consumption.hidden: true
      EnterpriseProject.ProjectUUID,
     EnterpriseProject .ProjectCategory,
      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      @Semantics.booleanIndicator: true
      ChangeDocTextIsChanged,
      _ChangeDocument.CreationDate,
      _ChangeDocument.CreationTime
      

}
where
  ChangeItem.ChangeDocObjectClass = '/S4PPM/PROJECT'
```
